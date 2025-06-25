"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "confirmPassword") {
        form.append(key, value);
      }
    });

    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("❌ Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting form.");
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      age: "",
      phone: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      file: null,
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
          Create Your Account
        </h2>

        {submitted ? (
          <div className="text-center text-black text-lg font-medium space-y-4">
            ✅ Account Created Successfully!
            <p>Please wait for account confirmation.</p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 px-5 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
            >
              ← Back to Main Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-black">
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md"
              />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Middle Name"
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="sm:col-span-2 w-full px-4 py-2 border border-green-300 rounded-md"
              />
            </div>

            {/* Age and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md"
            />

            {/* Address */}
            <select
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md"
            >
              <option value="">Select your address</option>
              <option value="Purok Newton">Purok Newton</option>
              <option value="Purok Proper North">Purok Proper North</option>
              <option value="Purok Hilado">Purok Hilado</option>
            </select>

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md"
            />

            {/* File Upload */}
            <div>
              <label className="block text-sm mb-1 text-green-900 font-medium">
                Upload Valid ID (e.g., PhilSys)
              </label>
              <input
                id="file"
                type="file"
                name="file"
                accept="image/*"
                onChange={handleChange}
                required
                className="hidden"
              />
              <label
                htmlFor="file"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 transition"
              >
                {formData.file ? "Change Image" : "Upload Image"}
              </label>
              {formData.file && (
                <p className="mt-2 text-sm text-black">
                  Selected: {formData.file.name}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 border border-green-500 text-green-800 rounded-md hover:bg-green-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        {/* Login Redirect */}
        {!submitted && (
          <p className="mt-6 text-sm text-center text-green-700">
            Already have an account?{" "}
            <Link href="/login" className="text-green-900 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
