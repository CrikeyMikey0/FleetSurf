"use client";

import { useRouter } from "next/navigation";
import { clearAuthToken } from "@/lib/auth";
import { ROUTES } from "@/lib/routes";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    clearAuthToken();
    router.push(ROUTES.AUTH.LOGIN);
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}
