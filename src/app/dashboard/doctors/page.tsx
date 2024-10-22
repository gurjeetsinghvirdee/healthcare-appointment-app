"use client";

import { useState } from 'react';
import { Client, Databases } from 'appwrite';

const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export default function Doctors() {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [bio, setBio] = useState('');
  const [success, setSuccess] = useState('');

  const handleDoctorProfile = async () => {
    try {
      await databases.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, 'doctors', 'unique()', { name, specialty, bio });
      setSuccess('Doctor profile created successfully');
    } catch (error) {
      console.error(error);
      setSuccess('Failed to create doctor profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-clay mb-4">Create Doctor Profile</h2>
        <p className="text-gray-700 mb-6">Add a new doctor to the system.</p>
        <input
          type="text"
          placeholder="Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
        />
        <input
          type="text"
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
          rows={4}
        />
        <button
          onClick={handleDoctorProfile}
          className="bg-galaxy-blue text-white p-3 rounded-lg w-full mt-4 hover:bg-clay transition"
        >
          Create Profile
        </button>
        {success && <p className="mt-2 text-green-500">{success}</p>}
      </div>
    </div>
  );
}