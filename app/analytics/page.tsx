"use client";

import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, Legend
} from "recharts";
import { TrendingUp, Fuel, BarChart3, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

// Mock Data for Fuel Efficiency Trend
const FUEL_TREND_DATA = [
    { month: "Jan", efficiency: 15 },
    { month: "Feb", efficiency: 25 },
    { month: "Mar", efficiency: 45 },
    { month: "Apr", efficiency: 80 },
    { month: "May", efficiency: 15 },
    { month: "Jun", efficiency: 55 },
    { month: "Jul", efficiency: 12 },
    { month: "Aug", efficiency: 65 },
    { month: "Sep", efficiency: 85 },
    { month: "Oct", efficiency: 100 },
];

// Mock Data for Costliest Vehicles
const COSTLY_VEHICLES_DATA = [
    { name: "VAN-03", cost: 12000 },
    { name: "TRK-01", cost: 25000 },
    { name: "SUV-02", cost: 45000 },
    { name: "TRK-05", cost: 85000 },
    { name: "TRK-12", cost: 110000 },
];

// Mock Data for Financial Summary
const FINANCIAL_SUMMARY = [
    { month: "January", revenue: "₹ 17 ", fuel: "6 L", maintenance: "₹ 300", profit: "₹ 95 " },
    { month: "February", revenue: "₹ 19 ", fuel: "7 L", maintenance: "₹ 330", profit: "₹ 90" },
    { month: "March", revenue: "₹ 22 ", fuel: "8 L", maintenance: "₹ 250", profit: "₹ 160" },
    { month: "April", revenue: "₹ 25 ", fuel: "9 L", maintenance: "₹ 430", profit: "₹ 129 " },
    { month: "May", revenue: "₹ 18 ", fuel: "5 L", maintenance: "₹ 250", profit: "₹ 110 " },
];

const COLORS = ["#2E7536", "#558953", "#E4BF1B", "#74A8BA", "#C5D5D8"];

export default function AnalyticsPage() {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <div className="min-h-screen bg-[#1B1E19] text-white selection:bg-[#2E7536]/30 p-6 lg:p-10">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2E7536]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#558953]/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
                            <span className="w-2 h-10 bg-[#2E7536] rounded-full" />
                            Fleet Flow Analytics
                        </h1>
                        <p className="text-[#C5D5D8]/50 font-medium ml-5">Operational Analytics & Financial Reports</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-2 rounded-2xl">
                        <button className="px-4 py-2 bg-[#2E7536] text-white text-xs font-black rounded-xl uppercase tracking-widest shadow-lg shadow-[#2E7536]/20">Overview</button>
                        <button className="px-4 py-2 text-white/40 text-xs font-black rounded-xl uppercase tracking-widest hover:text-white transition-colors">Forecasting</button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/[0.02] border border-[#2E7536]/30 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#2E7536]" />
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <p className="text-xs font-black text-[#2E7536] uppercase tracking-[0.2em]">Total Fuel Cost</p>
                                <h2 className="text-4xl font-black tracking-tighter">₹ 2.6 L</h2>
                            </div>
                            <div className="w-12 h-12 bg-[#2E7536]/10 rounded-2xl flex items-center justify-center border border-[#2E7536]/20">
                                <Fuel className="text-[#2E7536] w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                            <ArrowUpRight className="w-3 h-3 text-[#E4BF1B]" />
                            <span className="text-[#E4BF1B]">+5.2%</span> vs last month
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-[#E4BF1B]/30 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#E4BF1B]" />
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <p className="text-xs font-black text-[#E4BF1B] uppercase tracking-[0.2em]">Fleet ROI</p>
                                <h2 className="text-4xl font-black tracking-tighter">+ 12.5%</h2>
                            </div>
                            <div className="w-12 h-12 bg-[#E4BF1B]/10 rounded-2xl flex items-center justify-center border border-[#E4BF1B]/20">
                                <TrendingUp className="text-[#E4BF1B] w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                            <ArrowUpRight className="w-3 h-3 text-[#2E7536]" />
                            <span className="text-[#2E7536]">+2.1%</span> vs target
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-[#74A8BA]/30 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#74A8BA]" />
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <p className="text-xs font-black text-[#74A8BA] uppercase tracking-[0.2em]">Utilization Rate</p>
                                <h2 className="text-4xl font-black tracking-tighter">82%</h2>
                            </div>
                            <div className="w-12 h-12 bg-[#74A8BA]/10 rounded-2xl flex items-center justify-center border border-[#74A8BA]/20">
                                <BarChart3 className="text-[#74A8BA] w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                            <ArrowDownRight className="w-3 h-3 text-red-500" />
                            <span className="text-red-500">-1.4%</span> capacity variance
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Line Chart */}
                    <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[3rem] backdrop-blur-2xl shadow-xl flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-black tracking-tight flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#2E7536] rounded-full" />
                                Fuel Efficiency Trend (km/L)
                            </h3>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black uppercase text-white/40 tracking-widest border border-white/5">YTD 2026</div>
                        </div>
                        <div className="h-[300px] w-full">
                            {isClient && (
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={FUEL_TREND_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            stroke="#ffffff20"
                                            fontSize={10}
                                            fontWeight="bold"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#C5D5D860' }}
                                        />
                                        <YAxis
                                            stroke="#ffffff20"
                                            fontSize={10}
                                            fontWeight="bold"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#C5D5D860' }}
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1B1E19', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '12px' }}
                                            itemStyle={{ color: '#E4BF1B', fontWeight: 'bold' }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="efficiency"
                                            stroke="#2E7536"
                                            strokeWidth={4}
                                            dot={{ fill: '#2E7536', stroke: '#1B1E19', strokeWidth: 2, r: 6 }}
                                            activeDot={{ r: 8, stroke: '#E4BF1B', strokeWidth: 2 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[3rem] backdrop-blur-2xl shadow-xl flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-black tracking-tight flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#E4BF1B] rounded-full" />
                                Top 5 Costliest Vehicles
                            </h3>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black uppercase text-white/40 tracking-widest border border-white/5">Current Qtr</div>
                        </div>
                        <div className="h-[300px] w-full">
                            {isClient && (
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={COSTLY_VEHICLES_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            stroke="#ffffff20"
                                            fontSize={10}
                                            fontWeight="bold"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#C5D5D860' }}
                                        />
                                        <YAxis
                                            stroke="#ffffff20"
                                            fontSize={10}
                                            fontWeight="bold"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#C5D5D860' }}
                                            tickFormatter={(value) => `₹${value / 1000}k`}
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1B1E19', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '12px' }}
                                            formatter={(value) => [`₹${value.toLocaleString()}`, 'Maintenance Cost']}
                                        />
                                        <Bar dataKey="cost" radius={[8, 8, 0, 0]} barSize={40}>
                                            {COSTLY_VEHICLES_DATA.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>
                </div>

                {/* Financial Summary Table */}
                <div className="space-y-6">
                    <div className="flex items-center justify-center">
                        <div className="px-10 py-3 bg-white/[0.03] border border-white/10 rounded-full shadow-lg backdrop-blur-md">
                            <h2 className="text-xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#2E7536] via-[#E4BF1B] to-[#74A8BA]">
                                Financial Summary of Month
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/[0.02] border-b border-white/5">
                                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#C5D5D8]/40">Month</th>
                                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#E4BF1B]">Revenue</th>
                                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#74A8BA]">Fuel Cost</th>
                                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-red-400">Maintenance</th>
                                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#2E7536]">Net Profit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {FINANCIAL_SUMMARY.map((row, idx) => (
                                    <tr key={idx} className="group hover:bg-white/[0.02] transition-all">
                                        <td className="px-10 py-7 font-black text-[#C5D5D8] tracking-wider">{row.month}</td>
                                        <td className="px-10 py-7 font-mono font-bold text-white group-hover:text-[#E4BF1B] transition-colors">{row.revenue}</td>
                                        <td className="px-10 py-7 font-mono text-white/70">{row.fuel}</td>
                                        <td className="px-10 py-7 font-mono text-white/50">{row.maintenance}</td>
                                        <td className="px-10 py-7 font-mono font-black text-[#2E7536] text-lg">{row.profit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Dashboard Footer Watermark */}
                <div className="flex justify-center pt-10 pb-6 opacity-10">
                    <span className="text-8xl font-black tracking-[0.5em] select-none">FLEET FLOW</span>
                </div>
            </div>
        </div>
    );
}
