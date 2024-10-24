// Admin Dashboard

"use client";

import Link from 'next/link';
import Appointments from '../doctor/manage-appointments/page';

export default function AdminDashboard() {
    return (
        <div className='min-h-screen flex-col items-center justify-center bg-buttercream'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl'>
                <h2 className='text-3xl font-bold text-galaxy-blue mb-4'>Admin Dashboard</h2>
                <p className='text-gray mb-6'>Manage doctors, appointments, and more.</p>
                <div className='flex flex-col space-y-4'>
                    <Link href='/dashboard/admin/all-doctors'legacyBehavior>
                        <a className='bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition'>
                            Manage Doctors
                        </a>
                    </Link>
                    <Link href='/dashboard/doctor/manage-appointments'legacyBehavior>
                        <a className='bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition'>
                            Manage Appointments
                        </a>
                    </Link>
                    <button className='bg-galaxy-blue text-white p-3 rounded-lg text-center hover:bg-clay transition'>
                        Settings
                    </button>
                </div>
            </div>
        </div>
    );
}