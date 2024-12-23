import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const MyReviews = () => {

    const reviews = [
        {
          id: 1,
          serviceId: 1,
          serviceTitle: 'Web Design Service',
          text: 'The service exceeded my expectations. Highly recommend!',
          rating: 5,
          date: '2024-12-20',
        },
        {
          id: 2,
          serviceId: 3,
          serviceTitle: 'SEO Optimization',
          text: 'Great results in just a month. Traffic is up by 50%.',
          rating: 4,
          date: '2024-12-18',
        },
      ];
      

    return (
        <div className="max-w-5xl mx-auto my-16">
            <h1 className="text-2xl font-bold mb-6 text-white text-center">My Reviews</h1>
            <div className="space-y-4">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-[#2F3E46] shadow-md p-4 rounded-md flex justify-between items-start"
                    >
                        <div>
                            <h3 className="text-lg text-white font-bold">{review.serviceTitle}</h3>
                            <p className="text-gray-300">{review.text}</p>
                            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                        <MdEdit className='text-blue-500 text-2xl' />
                        <MdDelete className='text-red-500 text-2xl' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;