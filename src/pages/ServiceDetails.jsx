import React from 'react';

const ServiceDetails = () => {

    const service =
        {
          id: 1,
          image: 'https://via.placeholder.com/300x200',
          title: 'Web Design Service',
          company: 'Creative Studios',
          website: 'https://creativestudios.com',
          description: 'Professional web design services for your business.',
          category: 'Web Design',
          price: 500,
          addedDate: '2024-12-20',
          userEmail: 'user1@example.com',
        }

        const reviews = [
            {
              id: 1,
              serviceId: 1,
              serviceTitle: 'Web Design Service',
              text: 'Amazing design! The team was very professional and delivered on time.',
              rating: 5,
              userName: 'John Doe',
              userPhoto: 'https://via.placeholder.com/50',
              date: '2024-12-23',
            },
            {
              id: 2,
              serviceId: 2,
              serviceTitle: 'Graphic Design Service',
              text: 'Great work! They really understood what I needed for my brand.',
              rating: 4,
              userName: 'Jane Smith',
              userPhoto: 'https://via.placeholder.com/50',
              date: '2024-12-22',
            },
            {
              id: 3,
              serviceId: 3,
              serviceTitle: 'SEO Optimization',
              text: 'My website traffic has increased significantly. Thank you!',
              rating: 5,
              userName: 'Emily Brown',
              userPhoto: 'https://via.placeholder.com/50',
              date: '2024-12-21',
            },
          ];
          

    return (
        <div className="max-w-5xl mx-auto my-16">
            <div className="bg-[#2F3E46] shadow-md rounded-md p-6">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-md"
                />
                <h1 className="text-2xl text-white font-bold mt-4">{service.title}</h1>
                <p className="text-gray-300 mt-2">{service.description}</p>
                <p className="mt-2">
                    <strong>Category:</strong> {service.category}
                </p>
                <p className="mt-2">
                    <strong>Price:</strong> ${service.price}
                </p>
                <p className="mt-2">
                    <strong>Company:</strong> {service.company}
                </p>
                <p className="mt-2">
                    <a href={service.website} className="text-blue-600 underline">
                        Visit Website
                    </a>
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-xl text-white font-bold mb-4">
                    Reviews ({reviews.length})
                </h2>
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-[#2F3E46] p-4 rounded-md shadow-sm">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={review.userPhoto}
                                    alt={review.userName}
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="font-bold text-white">{review.userName}</p>
                            </div>
                            <p className="mt-2">{review.text}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500">
                                    {'★'.repeat(review.rating)}
                                </span>
                                <span className="ml-2 text-sm text-gray-200">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 bg-[#2F3E46] p-6 shadow-md rounded-md">
                <h3 className="text-lg font-bold mb-4">Add Your Review</h3>
                <form className="space-y-4">
                <textarea className="textarea textarea-bordered w-full" placeholder="Write your review"></textarea>
                    <div>
                        <label className="block text-sm font-medium">Rating</label>
                        <input
                            type="number"
                            max={5}
                            min={1}
                             className="input input-bordered w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;