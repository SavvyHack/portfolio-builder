'use client';

import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password == formData.confirmPassword) {
        setError('');
        console.log('Sign Up Data:', formData);
    } else if (formData.password != formData.confirmPassword) {
        setError('Passwords do not match!');
    }
    // Add your form validation or submit logic here
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-purple-200 rounded-xl shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-black text-center">Create an Account</h1>

        <div>
          <label htmlFor="username" className="block mb-1 text-black font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-black font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-black font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-1 text-black font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {error && (
            <p className="text-red-600 text-black font-medium text-center">
                {error}
            </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}
