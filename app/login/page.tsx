"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push(ROUTES.DASHBOARD);
  };

  const handleRegister = () => {
    router.push(ROUTES.AUTH.REGISTER);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">FS</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Fleet Flow</h2>
        <p className="text-center text-gray-500 text-sm mb-8">Fleet Management System</p>

        {/* Form Inputs */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition shadow-md hover:shadow-lg"
          >
            Login
          </button>

          <button
            onClick={handleRegister}
            className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition shadow-md hover:shadow-lg"
          >
            Create a New Account
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-8">
          © 2026 Fleet Flow. All rights reserved.
        </p>
      </div>
    </div>
  );
}