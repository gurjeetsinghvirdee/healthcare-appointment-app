"use client";

import { useEffect, useState } from 'react';
import { Client, Databases, Models } from 'appwrite';

const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

interface Appointment extends Models.Document {
  date: string;
  patientId: string;
  status?: string;
}

export default function DoctorViewAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await databases.listDocuments<Appointment>(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_APPOINTMENTS_COLLECTION_ID!
        );
        setAppointments(res.documents as unknown as Appointment[]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-galaxy-blue mb-4">View Appointments</h2>
        <ul className="list-disc list-inside">
          {appointments.length === 0 ? (
            <p className="text-gray">No upcoming appointments.</p>
          ) : (
            appointments.map((appointment) => (
              <li key={appointment.$id} className="text-gray mb-2">
                {appointment.date} with Patient ID: {appointment.patientId}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}