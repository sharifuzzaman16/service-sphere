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
            quote: "We've seen a huge boost in efficiency after using this tool. It's essential for our business.",
        },
        {
            name: "Alex Brown",
            role: "Founder, GreenTech",
            quote: "We've seen a huge boost in performance after using this tool. It's essential for our business.",
        },
    ];


    return (
        <div className="pt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold text-[#2F3640] mb-20">What Our Clients Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl relative transition-shadow duration-300"
                        >
                            <div className="avatar absolute -top-6 -left-6">
                                <div className="ring-[#1E8449] ring-offset-[#E9F7EF] w-24 rounded-full ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4 text-[#2F3640]">{testimonial.name}</h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-lg italic text-gray-500 mt-4">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
