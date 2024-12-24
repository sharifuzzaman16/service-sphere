import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  
    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0 }  
    };

    return (
        <motion.div
            className="bg-[#2F3E46] shadow-lg rounded-lg overflow-hidden w-80"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
            }}
        >
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
                <Link to={`/services/details/${service._id}`}>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        See Details
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
