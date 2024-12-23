import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-[#2F3E46] shadow-lg rounded-lg overflow-hidden w-80">
            <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl text-white font-semibold mb-2">{service.serviceTitle}</h2>
                
                <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                <div className="divider"></div>
                <div className="badge mb-4">{service.category}</div>
                <p className="text-xl font-bold text-green-500 mb-4">$ {service.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                    See Details
                </button>
            </div>
        </div>
        
    );
};

export default ServiceCard;