'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { LuGithub } from "react-icons/lu";

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TEMPORARY: Handle login for testing
  // TODO: REMOVE THIS AND IMPLEMENT PROPER AUTHENTICATION
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    router.push('/dashboard')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/95">
      <div className="w-full max-w-md p-8 space-y-6 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight gradient-text">Welcome back</h2>
          <p className="text-sm text-gray-400">
            Login with your GitHub or Google account
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800/50 transition-colors">
            <LuGithub className="w-5 h-5 mr-2" />
            Login with GitHub
          </button>
          
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800/50 transition-colors">
            <FcGoogle className="w-5 h-5 mr-2" />
            Login with Google
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              className="mt-1 block w-full px-3 py-2 bg-black/40 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-gray-200">
                Password
              </label>
              <Link href="/forgot-password" className="text-sm text-green-400 hover:text-green-300">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-black/40 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-green-400 hover:text-green-300">
            Sign up
          </Link>
        </p>

        <p className="text-center text-xs text-gray-500">
          By clicking continue, you agree to our{' '}
          <Link href="/terms" className="text-green-400 hover:text-green-300">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-green-400 hover:text-green-300">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
} 