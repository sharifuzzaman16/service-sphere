import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm bg-[#2F3E46] p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-white font-semibold text-center mb-6">Register</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-100">Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
                        placeholder='Enter your name...'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
                        placeholder='Enter your email...'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-100">Photo URL</label>
                    <input
                        type="url"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
                        placeholder='Photo URL'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
                    <input
                        type="password"
                        className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
                        placeholder='Password'
                        required
                    />
                </div>

                <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4"
                >
                    Register
                </button>

                <button
                    className="w-full bg-red-600 text-white py-2 rounded-lg mb-4"
                >
                    Register with Google
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-300">
                        Already have an account?{' '}
                        <Link to={'/login'} className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;