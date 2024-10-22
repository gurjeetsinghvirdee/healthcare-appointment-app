"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Client, Account } from 'appwrite';

const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

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
    <div className="min-h-screen flex items-center justify-center bg-buttercream">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-galaxy-blue mb-4">Welcome Back</h2>
        <p className="text-gray mb-6">Log in to manage your health appointments.</p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3 p-3 border border-gray-300 rounded w-full focus:border-galaxy-blue"
        />
        <button
          onClick={handleLogin}
          className="bg-galaxy-blue text-white p-3 rounded-lg w-full mt-4 hover:bg-clay transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
}