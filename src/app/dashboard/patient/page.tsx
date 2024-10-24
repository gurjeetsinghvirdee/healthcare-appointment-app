// Patient Dashboard Page

"use client";

import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-galaxy-blue mb-4">Patient Dashboard</h2>
        <p className="text-gray mb-6">Manage your appointments and personal information.</p>
        <div className="flex flex-col space-y-4">
          <Link href="/dashboard/patient/schedule-appointment" legacyBehavior>
            <a className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">Schedule Appointments</a>
          </Link>
          <Link href="/dashboard/patient/view-appointments" legacyBehavior>
            <a className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">View Appointments</a>
          </Link>
          <button className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">Update Personal Information</button>
          <button className="bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition">Notifications & Reminders</button>
        </div>
      </div>
    </div>
  );
}
