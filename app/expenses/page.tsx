"use client";

import { useState, useMemo } from "react";
import AddExpenseModal from "./AddExpenseModal";

// Mock Data for Expenses Log
const INITIAL_EXPENSES = [
    { id: 1, tripId: "TRP-2024-101", driver: "John Doe", distance: "450 km", fuel: "₹120.00", misc: "₹15.00", status: "done" },
    { id: 2, tripId: "TRP-2024-105", driver: "Arjun Singh", distance: "820 km", fuel: "₹210.50", misc: "₹45.00", status: "going on" },
    { id: 3, tripId: "TRP-2024-108", driver: "Sarah Miller", distance: "150 km", fuel: "₹45.00", misc: "₹0.00", status: "pending" },
    { id: 4, tripId: "TRP-2024-112", driver: "Michael Brown", distance: "1,200 km", fuel: "₹340.00", misc: "₹80.00", status: "done" },
];

export default function ExpensesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const [searchQuery, setSearchQuery] = useState("");

    const handleAddExpense = (newExpense: any) => {
        const expenseToAdd = {
            id: expenses.length + 1,
            tripId: newExpense.tripId,
            driver: newExpense.driverName,
            distance: "Pending", // Default since it wasn't in the form requirement but in log
            fuel: `₹${newExpense.fuelCost}`,
            misc: `₹${newExpense.miscExpense}`,
            status: "pending",
        };
        setExpenses([expenseToAdd, ...expenses]);
    };

    const filteredExpenses = useMemo(() => {
        if (!searchQuery) return expenses;

        const query = searchQuery.toLowerCase();
        return expenses.filter(expense =>
            expense.tripId.toLowerCase().includes(query) ||
            expense.driver.toLowerCase().includes(query) ||
            expense.status.toLowerCase().includes(query)
        );
    }, [expenses, searchQuery]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "done": return "text-[#2E7536] bg-[#2E7536]/10 border-[#2E7536]/20";
            case "going on": return "text-[#74A8BA] bg-[#74A8BA]/10 border-[#74A8BA]/20";
            case "pending": return "text-[#E4BF1B] bg-[#E4BF1B]/10 border-[#E4BF1B]/20";
            default: return "text-white/40 bg-white/5 border-white/10";
        }
    };

    return (
        <div className="min-h-screen bg-[#1B1E19] text-white selection:bg-[#2E7536]/30">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2E7536]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#558953]/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
                            <span className="w-2 h-10 bg-[#2E7536] rounded-full" />
                            Expenses Log
                        </h1>
                        <p className="text-[#C5D5D8]/50 font-medium ml-5">Track and manage fleet expenditure across all trips</p>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-[#E4BF1B] text-[#1B1E19] font-black rounded-2xl shadow-xl shadow-[#E4BF1B]/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Expense
                    </button>
                </div>

                {/* Filters & Search Bar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-white/[0.02] border border-white/10 p-4 rounded-[2rem] backdrop-blur-xl shadow-2xl">
                    <div className="lg:col-span-5 relative">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by trip, driver or status..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E7536] transition-all placeholder:text-white/20"
                        />
                    </div>

                    <div className="lg:col-span-7 flex flex-wrap gap-3 items-center justify-end">
                        <button className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-bold text-white/70 hover:bg-white/10 transition-all flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filter
                        </button>
                        <button className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-bold text-white/70 hover:bg-white/10 transition-all flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            Group By
                        </button>
                        <button className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-bold text-white/70 hover:bg-white/10 transition-all flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                            Sort By
                        </button>
                    </div>
                </div>

                {/* Expenses Table */}
                <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-2xl shadow-[0_32px_120px_rgba(0,0,0,0.4)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/[0.01]">
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/40">Trip ID</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/40">Driver Name</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/40">Distance</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/40">Fuel Expense</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/40">Misc Expenses</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-white/40 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredExpenses.map((expense) => (
                                    <tr key={expense.id} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-6">
                                            <span className="font-bold text-[#E4BF1B] group-hover:underline underline-offset-4 cursor-pointer">{expense.tripId}</span>
                                        </td>
                                        <td className="px-8 py-6 font-medium text-white/90">{expense.driver}</td>
                                        <td className="px-8 py-6 text-[#C5D5D8]/70">{expense.distance}</td>
                                        <td className="px-8 py-6 font-mono text-white/90">{expense.fuel}</td>
                                        <td className="px-8 py-6 font-mono text-white/60">{expense.misc}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex justify-center">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(expense.status)}`}>
                                                    {expense.status}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredExpenses.length === 0 && (
                            <div className="p-20 text-center space-y-4">
                                <div className="text-5xl opacity-20">🔍</div>
                                <p className="text-[#C5D5D8]/40 font-medium">No results found for "{searchQuery}"</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Add Expense Modal */}
            <AddExpenseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddExpense}
            />
        </div>
    );
}