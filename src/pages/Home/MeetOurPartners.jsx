import React from 'react';
import { FaReact, FaMicrosoft, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

const MeetOurPartners = () => {

    // Note: fake data created by ChatGPT
    const partners = [
        {
            name: "React",
            icon: <FaReact className="text-4xl text-blue-600 mx-auto" />,
            description: "React is a leading company in technology and innovation, offering cutting-edge solutions.",
        },
        {
            name: "Google",
            icon: <FcGoogle className="text-4xl text-red-600 mx-auto" />,
            description: "Google provides outstanding services in data analytics and business intelligence.",
        },
        {
            name: "Microsoft",
            icon: <FaMicrosoft className="text-4xl text-blue-800 mx-auto" />,
            description: "Microsoft specializes in cloud computing and infrastructure management for businesses.",
        },
        {
            name: "Apple",
            icon: <FaApple className="text-4xl text-gray-800 mx-auto" />,
            description: "Apple is a global leader in software development and digital transformation.",
        },
    ];

    const partnerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="pt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-white mb-8">Meet Our Partners</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#2F3E46] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            variants={partnerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                                rotate: 3, 
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="mb-4">
                                {partner.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                            <p className="text-gray-300">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurPartners;
