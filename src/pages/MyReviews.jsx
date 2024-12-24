import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (loading || !user) return;

        const fetchReviews = async () => {
            try {

                const { data: reviewsData } = await axios.get(
                    `http://localhost:5000/services/reviews/my-reviews?userEmail=${user.email}`
                );

                if (reviewsData.length === 0) {
                    setReviews([]);

                    return;
                }

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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/services/reviews/my-reviews/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                            const updatedReviews = reviews.filter(review => review._id !== id);
                            setReviews(updatedReviews);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the review. Please try again.",
                            icon: "error"
                        });
                    });
            }
        });
    };


    return (
        <div className="max-w-5xl mx-auto my-16">
            <Helmet>
                <title>My Reviews - ServiceSphere</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-6 text-white text-center">My Reviews</h1>
            {reviews.length === 0 ? (
                <div className="text-center text-white">
                    <p>You have no reviews yet.</p>
                </div>
            ) : (
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
                                <Link to={`/my-reviews/update/${review._id}`} state={{ serviceTitle: review.serviceTitle }}>
                                    <button
                                        className="bg-green-500 text-white px-4 py-1 rounded-md"
                                    >
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(review._id)}
                                    className="bg-red-500 text-white px-4 py-1 rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyReviews;
