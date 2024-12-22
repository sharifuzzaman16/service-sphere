import React from 'react';

const Testimonials = () => {

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
      
      

    return (
        <div className="pt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#2F3E46] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-lg italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Testimonials;