"use client";

import { useState } from "react";

interface AddExpenseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (expense: any) => void;
}

export default function AddExpenseModal({ isOpen, onClose, onSubmit }: AddExpenseModalProps) {
    const [formData, setFormData] = useState({
        tripId: "",
        driverName: "",
        fuelCost: "",
        miscExpense: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
        setFormData({ tripId: "", driverName: "", fuelCost: "", miscExpense: "" });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1B1E19]/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-md bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[2rem] shadow-[0_32px_120px_rgba(0,0,0,0.6)] overflow-hidden scale-in-center animate-in zoom-in-95 duration-300">
                {/* Header Decor */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E7536] via-[#E4BF1B] to-[#558953]" />

                <div className="p-8">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Add New Expense</h2>
                        <p className="text-[#C5D5D8]/60 text-sm mt-1">Enter trip and cost details below</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 uppercase tracking-widest ml-1">Trip ID</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. TRP-2024-001"
                                    value={formData.tripId}
                                    onChange={(e) => setFormData({ ...formData, tripId: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E7536] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 uppercase tracking-widest ml-1">Driver Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Driver's Full Name"
                                    value={formData.driverName}
                                    onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E7536] transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest ml-1">Fuel Cost</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">₹</span>
                                        <input
                                            type="number"
                                            required
                                            placeholder="0.00"
                                            value={formData.fuelCost}
                                            onChange={(e) => setFormData({ ...formData, fuelCost: e.target.value })}
                                            className="w-full pl-9 pr-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E7536] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest ml-1">Misc Expense</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">₹</span>
                                        <input
                                            type="number"
                                            required
                                            placeholder="0.00"
                                            value={formData.miscExpense}
                                            onChange={(e) => setFormData({ ...formData, miscExpense: e.target.value })}
                                            className="w-full pl-9 pr-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#2E7536] transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 py-3.5 border border-white/10 text-white/80 font-bold rounded-xl hover:bg-white/5 transition-all uppercase tracking-widest text-xs"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3.5 bg-[#E4BF1B] text-[#1B1E19] font-black rounded-xl shadow-lg shadow-[#E4BF1B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest text-xs"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
