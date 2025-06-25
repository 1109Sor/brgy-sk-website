"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUser, FaBullhorn, FaSignOutAlt, FaTachometerAlt, FaNewspaper, FaExclamationCircle } from "react-icons/fa";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // In real app, fetch user info from session or API
    setUser({
      name: "Juan Dela Cruz",
      age: 21,
      barangay: "Purok Proper North",
      concern: "Street lights not working",
    });
  }, []);

  const handleLogout = () => {
    // Clear auth/session storage (if implemented)
    // Redirect to login
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white flex flex-col py-6 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">SK Dashboard</h2>
        <nav className="flex flex-col gap-4 text-sm">
          <button className="flex items-center gap-2 hover:text-green-300">
            <FaTachometerAlt /> Dashboard
          </button>
          <button className="flex items-center gap-2 hover:text-green-300">
            <FaUser /> Account
          </button>
          <button className="flex items-center gap-2 hover:text-green-300">
            <FaNewspaper /> News
          </button>
          <button className="flex items-center gap-2 hover:text-green-300">
            <FaBullhorn /> Announcements
          </button>
          <button className="flex items-center gap-2 hover:text-green-300">
            <FaExclamationCircle /> Concerns
          </button>
        </nav>
        <div className="mt-auto pt-10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-300 hover:text-red-500"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-green-900 mb-6">
          🌟 Welcome, {user?.name}
        </h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500">Age</p>
            <p className="text-2xl font-bold text-green-800">{user?.age}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500">Barangay</p>
            <p className="text-2xl font-bold text-green-800">{user?.barangay}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500">Recent Concern</p>
            <p className="text-green-800 font-semibold text-md">
              {user?.concern}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500">Status</p>
            <p className="text-green-800 font-semibold text-md">Active</p>
          </div>
        </div>

        {/* News/Announcement/Concern preview could go here */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            📢 Latest Updates
          </h2>
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>Youth Sports Fest coming this July</li>
            <li>Barangay Cleanup Drive every Saturday</li>
            <li>Submit your concerns via the Concerns tab</li>
          </ul>
        </div>
      </main>
    </div>
  );
}