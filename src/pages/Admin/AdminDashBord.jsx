import React from "react";
import FullCalendarComponent from "../../components/Calender"; 


export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
  
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-600">Overview of system performance</p>
            </header>

        
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Sales" value="$12,345" color="text-indigo-600" />
                <StatCard title="Total Customers" value="234" color="text-green-600" />
                <StatCard title="Total Orders" value="890" color="text-blue-600" />
                <button className="bg-white shadow-xl rounded-lg text-wrap font-bold text-2xl text-pink-600" >
                    Create Admin</button>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-lg font-bold text-gray-800">Sales Analytics</h2>
                <div className="h-64 flex items-center justify-center bg-gray-50 text-gray-400">
                   
                    <p>Graph Placeholder</p>
                </div>
            </section>


            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-lg font-bold text-gray-800">Event Calendar</h2>
                <FullCalendarComponent />
            </section>
          
        </div>
    );
}


const StatCard = ({ title, value, color }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-sm font-medium text-gray-500">{title}</h2>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
);




