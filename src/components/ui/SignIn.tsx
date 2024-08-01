"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios'; // Import axios for HTTP requests

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signin', { email, password });
      console.log('Sign-in response:', response.data);

      if (response.data.success) {
        const { username } = response.data.user;
        // Store the username in local storage
        localStorage.setItem('user', username);
        // Redirect to home page
        window.location.href = '/';
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
      setError('Failed to sign in');
    }
  };

  return (
    <div className="mt-7 mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          Don't have an account yet?{' '}
          <Link href="/signup"
          className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
            Sign up here
          </Link>
        </p>
      </div>

      <div className="mt-5">
        <form onSubmit={handleSubmit} className="grid gap-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-gray-600 dark:text-gray-400">
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm mb-2 text-gray-600 dark:text-gray-400">
                Password
              </label>
              <Link href="/Frgtpasswd"
                className="text-sm text-blue-600 decoration-2 hover:underline font-medium">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-600 dark:text-gray-400 ms-3">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign in
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
