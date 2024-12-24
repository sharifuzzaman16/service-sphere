import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <Helmet>
                <title>Not Found - ServiceSphere</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600">404</h1>
                <p className="text-2xl font-semibold mt-4 text-gray-100">
                    Oops! Page not found.
                </p>
                <p className="mt-2 text-gray-400">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-700"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;