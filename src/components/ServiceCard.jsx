import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
            <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl text-gray-800 font-semibold mb-2">{service.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <p className="text-xl font-bold text-green-500 mb-4">{service.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;