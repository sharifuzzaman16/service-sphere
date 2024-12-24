import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, loading } = useContext(AuthContext);
    console.log(user.email)

    useEffect(() => {
        if (loading || !user) return;

        const fetchReviews = async () => {
            try {
                const { data: reviewsData } = await axios.get(
                    `http://localhost:5000/services/reviews/my-reviews?userEmail=${user.email}`
                );

                const serviceDetailsPromises = reviewsData.map((review) =>
                    axios.get(`http://localhost:5000/services/details/${review.serviceId}`)
                );

                const serviceDetailsResponses = await Promise.all(serviceDetailsPromises);
                const serviceDetails = serviceDetailsResponses.map((res) => res.data);

                const reviewsWithTitles = reviewsData.map((review, index) => ({
                    ...review,
                    serviceTitle: serviceDetails[index].serviceTitle,
                }));

                setReviews(reviewsWithTitles);
            } catch (error) {
                console.error('Error fetching reviews or service details:', error);
            }
        };

        fetchReviews();
    }, [user, loading]);

    return (
        <div className="max-w-5xl mx-auto my-16">
            <h1 className="text-2xl font-bold mb-6 text-white text-center">My Reviews</h1>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div
                        key={review._id}
                        className="bg-[#2F3E46] shadow-md p-4 rounded-md flex justify-between items-start"
                    >
                        <div>
                            <h3 className="text-lg text-white font-bold">{review.serviceTitle}</h3>
                            <p className="text-gray-300">{review.reviewText}</p>
                            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                        </div>
                        <div className="space-x-2">
                            <Link to={`/my-reviews/update/${review._id}`} state={{serviceTitle: review.serviceTitle}}>
                            <button
                                className="bg-green-500 text-white px-4 py-1 rounded-md"
                            >
                                Edit
                            </button>
                            </Link>
                            <button
                                className="bg-red-500 text-white px-4 py-1 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;