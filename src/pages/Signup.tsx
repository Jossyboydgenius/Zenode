'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { LuGithub } from "react-icons/lu";

export default function Signup() {
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your signup logic here
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/95">
      <div className="w-full max-w-md p-8 space-y-6 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800 my-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight gradient-text">Create an account</h2>
          <p className="text-sm text-gray-400">
            Sign up with your GitHub or Google account
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800/50 transition-colors">
            <LuGithub className="w-5 h-5 mr-2" />
            Continue with GitHub
          </button>
          
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800/50 transition-colors">
            <FcGoogle className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-gray-400">Or continue with email</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 block w-full px-3 py-2 bg-black/40 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              className="mt-1 block w-full px-3 py-2 bg-black/40 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-3 py-2 bg-black/40 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-200">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="mt-1 block w-full px-3 py-2 bg-black/40 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Create Account
          </button>
        </div>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-green-400 hover:text-green-300">
            Sign in
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