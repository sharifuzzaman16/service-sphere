import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="py-16 my-16 bg-white rounded-lg text-[#2F3640] text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-600 max-w-[600px] mx-auto mb-6">
                    Join thousands of other users who have transformed their business with our platform. Take the first step today!
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to={'/services'} className="px-6 py-3 rounded-md bg-[#1E8449] text-white font-semibold shadow-lg hover:bg-[#F39C12] transition">
                        Get Started
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CallToAction;
