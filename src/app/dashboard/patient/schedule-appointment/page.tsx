"use client";

import { useState } from 'react';
import { Client, Databases } from 'appwrite';

const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export default function PatientScheduleAppointment() {
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [success, setSuccess] = useState('');

  const handleAppointment = async () => {
    try {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_APPOINTMENTS_COLLECTION_ID!,
        'unique()',
        { 
          date,
          doctor 
        });
      setSuccess('Appointment scheduled successfully');
    } catch (error) {
      console.error(error);
      setSuccess('Failed to schedule appointment');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-galaxy-blue mb-4">Schedule an Appointment</h2>
        <p className="text-gray mb-6">Book your health appointment with ease.</p>
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
        />
        <button
          onClick={handleAppointment}
          className="bg-galaxy-blue text-white p-3 rounded-lg w-full mt-4 hover:bg-clay transition"
        >
          Schedule Appointment
        </button>
        {success && <p className="mt-2 text-green-500">{success}</p>}
      </div>
    </div>
  );
}
