// Main Dashboard Page

"use client";

import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-galaxy-blue mb-4">Dashboard</h2>
        <p className="text-gray mb-6">Select your role to proceed:</p>
        <div className="flex flex-col space-y-4">
          <Link href="/dashboard/admin" legacyBehavior>
            <a className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">Admin Section</a>
          </Link>
          <Link href="/dashboard/doctor" legacyBehavior>
            <a className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">Doctor Section</a>
          </Link>
          <Link href="/dashboard/patient" legacyBehavior>
            <a className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">Patient Section</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
