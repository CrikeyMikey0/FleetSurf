"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login on page load
    router.push(ROUTES.AUTH.LOGIN);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>Loading...</div>
    </div>
  );
}