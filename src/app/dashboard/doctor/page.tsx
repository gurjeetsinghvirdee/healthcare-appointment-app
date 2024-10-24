"use client";

import { useEffect, useState } from 'react';
import { Client, Databases, Models } from 'appwrite';

const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

interface Doctor extends Models.Document {
  name: string;
  specialty: string;
  bio: string;
}

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_DOCTORS_COLLECTION_ID!,
        );
        setDoctors(res.documents as unknown as Doctor[]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-galaxy-blue mb-4">Manage Doctors</h2>
        <ul className="list-disc list-inside">
          {doctors.length === 0 ? (
            <p className="text-gray">No doctors available.</p>
          ) : (
            doctors.map((doctor) => (
              <li key={doctor.$id} className="text-gray mb-2">
                Dr. {doctor.name} - {doctor.specialty}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
