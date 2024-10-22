import { useState } from 'react';
import { Client, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint(process.env.YOUR_APPWRITE_ENDPOINT!)
    .setProject(process.env.YOUR_APPWRITE_PROJECT_ID!)

const databases = new Databases(client)

export default function Doctors() {
    const [name, setName] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [success, setSuccess] = useState('')

    const handleDoctor = async () => {
        try {
            await databases.createDocument(process.env.YOUR_APPWRITE_DATABASE_ID!, 'doctors', 'unique()'
            , {
                name,
                specialty
            })
            setSuccess('Doctor profile created successfully')
        } catch (error) {
            console.error(error)
            setSuccess('Failed to create doctor profile')
        }
    };

    return (
        <div className='min-h-screen flex item-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md'>
                <h2 className='text-2xl mb-4'>Create Doctor Profile</h2>
                <input 
                    type='text'
                    placeholder='Doctor Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded mt-2"
                />
                <input 
                    type='text'
                    placeholder='Specialty'
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded mt-2"
                />
                <button
                    onClick={handleDoctor}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Create Profile
                </button>
                {success && <p className='mt-2 text-green-500'>{success}</p>}
            </div>
        </div>
    );
}