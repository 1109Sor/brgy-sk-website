"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaBullhorn,
  FaSignOutAlt,
  FaTachometerAlt,
  FaNewspaper,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Head from "next/head";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      name: "Juan Dela Cruz",
      age: 21,
      barangay: "Purok Proper North",
      concern: "Street lights not working",
      email: "juan@example.com",
      phone: "09123456789",
    });
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex bg-gray-50 min-h-screen font-[Poppins] text-sm">
        {/* Sidebar */}
        <aside className="w-72 h-screen fixed bg-white shadow-lg p-6 flex flex-col justify-between border-r">
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-green-700">SK Dashboard</h2>
              <p className="text-xs text-gray-400 mt-1">Youth Empowerment Panel</p>
            </div>
            <nav className="space-y-4">
              {[
                { id: "dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
                { id: "account", icon: <FaUserCircle />, label: "Account" },
                { id: "news", icon: <FaNewspaper />, label: "News" },
                { id: "announcements", icon: <FaBullhorn />, label: "Announcements" },
                { id: "concerns", icon: <FaExclamationTriangle />, label: "Concerns" },
              ].map(({ id, icon, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-md font-medium">{label}</span>
                  <MdOutlineArrowForwardIos className="ml-auto text-xs opacity-50" />
                </a>
              ))}
            </nav>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400 hover:text-red-600"
          >
            <FaSignOutAlt /> Logout
          </button>
        </aside>

        {/* Content */}
        <main className="ml-72 w-full p-10 space-y-16 overflow-y-auto">
          {/* Dashboard Overview */}
          <section id="dashboard">
            <h1 className="text-4xl font-bold text-green-800 mb-6">
              Welcome, {user?.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Age", value: user?.age },
                { title: "Barangay", value: user?.barangay },
                { title: "Recent Concern", value: user?.concern },
                { title: "Status", value: "Active" },
              ].map(({ title, value }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition border-l-4 border-green-600"
                >
                  <p className="text-gray-500 text-sm">{title}</p>
                  <p className="text-xl font-semibold text-green-800 mt-1">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Account Info */}
          <section id="account">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="text-green-800 font-medium">{user?.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="text-green-800 font-medium">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="text-green-800 font-medium">{user?.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Barangay</p>
                <p className="text-green-800 font-medium">{user?.barangay}</p>
              </div>
            </div>
          </section>

          {/* News */}
          <section id="news">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Latest News</h2>
            <div className="space-y-4">
              {["Youth Week Celebration starts July 1", "New library resources now available", "Scholarship applications open"].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow hover:bg-green-50 border-l-4 border-green-400">
                  <p className="text-green-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Announcements */}
          <section id="announcements">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Announcements</h2>
            <div className="space-y-4">
              {["Barangay Cleanup Drive every Saturday", "Mandatory SK Meeting this Friday 3PM", "Emergency kits now available"].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow hover:bg-green-50 border-l-4 border-yellow-400">
                  <p className="text-green-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Concerns */}
          <section id="concerns">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Your Concerns</h2>
            <div className="space-y-4">
              {[{ concern: "Street lights not working", status: "Submitted last week" }, { concern: "Roads need cleaning", status: "Resolved" }].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow border-l-4 border-red-400 hover:bg-red-50"
                >
                  <p className="text-green-800 font-medium">• {item.concern}</p>
                  <p className="text-xs text-gray-500">{item.status}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}