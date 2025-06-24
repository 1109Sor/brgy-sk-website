"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    phone: "",
    email: "",
    address: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Upload handling logic here
    setSubmitted(true);
  };

  const handleCancel = () => {
    // reset all fields
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      age: "",
      phone: "",
      email: "",
      address: "",
      file: null,
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-900 text-center mb-6">
          Create Your Account
        </h2>

        {submitted ? (
          <div className="text-center text-green-800 text-lg font-medium">
            ✅ Account Created Successfully!<br />
            Waiting for confirmation of your account.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-green-800 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md text-black placeholder-gray-600"
                />
              </div>
              <div>
                <label className="text-sm text-green-800 font-medium">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md text-black placeholder-gray-600"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-green-800 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md text-black placeholder-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-green-800 font-medium">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md text-black placeholder-gray-600"
                />
              </div>
              <div>
                <label className="text-sm text-green-800 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md text-black placeholder-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-green-800 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md text-black placeholder-gray-600"
              />
            </div>

            <div>
              <label className="text-sm text-green-800 font-medium">Address</label>
              <select
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-green-300 rounded-md text-black"
              >
                <option value="">Select an address</option>
                <option value="Purok Newton">Purok Newton</option>
                <option value="Purok Proper North">Purok Proper North</option>
                <option value="Purok Hilado">Purok Hilado</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-green-800 font-medium">
                Upload Valid ID (e.g., PhilSys / National ID)
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                accept="image/*"
                required
                className="w-full mt-1 text-sm text-green-900"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-green-800 border border-green-400 rounded-md hover:bg-green-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm bg-green-700 text-white rounded-md hover:bg-green-800 transition"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        {/* Back to login */}
        {!submitted && (
          <p className="mt-6 text-sm text-center text-green-700">
            Already have an account?{' '}
            <Link href="/login" className="text-green-900 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
