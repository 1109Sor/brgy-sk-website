"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        if (res.ok) {
          alert("✅ Login successful!");
          router.push("/dashboard"); // ✅ redirect to dashboard
        } else {
          alert(`❌ ${data.message || "Login failed."}`);
        }
      } else {
        const text = await res.text();
        console.error("❌ Unexpected response:", text);
        alert("❌ Server error: Expected JSON but got something else.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      alert("❌ Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="absolute top-6 left-6">
        <button
          onClick={() => router.push("/")}
          className="text-green-800 text-sm font-medium hover:underline"
        >
          ← Back to Main Page
        </button>
      </div>

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 sm:p-10 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-900">Welcome Back</h1>
          <p className="text-green-700 mt-1 text-sm">Log in to your SK Taloc account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
          >
            Log In
          </button>
        </form>

        <div className="text-sm text-center text-green-700">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-green-800 font-semibold hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
