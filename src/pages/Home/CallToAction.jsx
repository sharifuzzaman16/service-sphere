import React from 'react';

const CallToAction = () => {
    return (
        <div className="py-16 my-16 bg-[#2F3E46] rounded-lg text-white text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-300 max-w-[600px] mx-auto mb-6">
                    Join thousands of other users who have transformed their business with our platform. Take the first step today!
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-blue-600 text-white px-4 py-3 rounded mb-4"
                    >
                        Get Started
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CallToAction;
