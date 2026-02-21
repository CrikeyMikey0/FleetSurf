"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Vehicles", path: "/vehicles" },
        { name: "Trips", path: "/trips" },
        { name: "Maintenance", path: "/maintenance" },
        { name: "Expenses", path: "/expenses" },
        { name: "Drivers", path: "/drivers" },
        { name: "Analytics", path: "/analytics" },
    ];

    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-6">
                <h2 className="text-xl font-bold mb-8">Fleet Flow</h2>

                <nav className="space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`block p-2 rounded ${pathname === item.path
                                ? "bg-gray-700"
                                : "hover:bg-gray-800"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Page Content */}
            <div className="flex-1 p-8 bg-gray-100">{children}</div>
        </div>
    );
}