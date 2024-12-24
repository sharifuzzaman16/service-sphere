import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    // Note: fake data created by ChatGPT
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, TechCorp",
            quote: "This product revolutionized the way our team collaborates. A game-changer!",
        },
        {
            name: "Jane Smith",
            role: "CTO, InnovateX",
            quote: "An exceptional platform with outstanding customer support. Highly recommend!",
        },
        {
            name: "Michael Brown",
            role: "Founder, GreenTech",
            quote: "We've seen a huge boost in efficiency and performance after using this tool. It's essential for our business.",
        },
    ];

    
    const testimonialVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="pt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-white mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#2F3E46] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            variants={testimonialVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }} 
                            transition={{ duration: 1, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", 
                                transition: { duration: 0.3 }
                            }}
                        >
                            <p className="text-lg italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                            <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                            <p className="text-gray-400">{testimonial.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
