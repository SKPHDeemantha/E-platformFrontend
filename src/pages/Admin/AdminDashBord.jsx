import React from "react";
import FullCalendarComponent from "../../components/Calender";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600">Overview of  system's performance</p>
            </header>

            {/* Stats Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-sm font-medium text-gray-500">Total Sales</h2>
                    <p className="text-2xl font-bold text-indigo-600">$12,345</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-sm font-medium text-gray-500">New Customers</h2>
                    <p className="text-2xl font-bold text-green-600">234</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-sm font-medium text-gray-500">Orders</h2>
                    <p className="text-2xl font-bold text-blue-600">890</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-sm font-medium text-gray-500">Revenue</h2>
                    <button><FullCalendarComponent/></button>
                </div>
            </section>

            {/* Graph Section */}
            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Sales Performance</h2>
                <div className="h-64 flex items-center justify-center bg-gray-50 text-gray-400">
                    {/* Placeholder for a graph */}
                    Insert Graph Here
                </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Activity</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">Order #12345 processed</td>
                            <td className="py-3 px-6 text-left">2025-01-15</td>
                            <td className="py-3 px-6 text-left text-green-500">Completed</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">New customer registered</td>
                            <td className="py-3 px-6 text-left">2025-01-14</td>
                            <td className="py-3 px-6 text-left text-blue-500">Pending</td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">Server updated</td>
                            <td className="py-3 px-6 text-left">2025-01-13</td>
                            <td className="py-3 px-6 text-left text-red-500">Failed</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
