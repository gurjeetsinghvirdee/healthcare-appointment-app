import { useState } from 'react';
import { useRouter } from 'next/router';
import { Client, Account } from 'appwrite';

const client = new Client();
client
    .setEndpoint(process.env.YOUR_APPWRITE_ENDPOINT!)
    .setProject(process.env.YOUR_APPWRITE_PROJECT_ID!)

const account = new Account(client);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await account.createSession(email, password);
            alert('Logged in successfully');
            router.push('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Failed to log in');
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className='text-2xl mb-4'>Login</h2>
                <input 
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Login
                </button>
            </div>
        </div>
    );
}