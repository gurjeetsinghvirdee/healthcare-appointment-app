import { useState } from 'react';
import { useRouter } from 'next/router';
import { Client, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint(process.env.YOUR_APPWRITE_ENDPOINT!)
    .setProject(process.env.YOUR_APPWRITE_PROJECT_ID!)

const databases = new Databases(client)

export default function Appointments() {
    const [date, setDate] = useState('')
    const [doctor, setDoctor] = useState('')
    const [success, setSuccess] = useState('')
    const router = useRouter()

    const handleAppointment = async () => {
        try {
            await databases.createDocument(process.env.YOUR_APPWRITE_DATABASE_ID!, 'appointments', 'unique()', {
                date,
                doctor
            });
            setSuccess('Appointment scheduled successfully')
            router.push('/dashboard');
        } catch (error) {
            console.error(error)
            setSuccess('Failed to schedule appointment')
        }
    };

    return (
        <div className='min-h-screen flex item-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md'>
                <h2 className='text-2xl mb-4'>Schedule Appointment</h2>
                <input 
                    type='text'
                    placeholder='Doctor Name'
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className='w-full p-2 mb-4 border border-gray-300 rounded'
                />
                <input 
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='w-full p-2 mb-4 border border-gray-300 rounded'
                />
                <button
                    onClick={handleAppointment}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Schedule Appointment
                </button>
                {success && <p className='mt-2 text-green-500'>{success}</p>}
            </div>
        </div>
    );
}