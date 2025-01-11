import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (loading || !user) return;

        const fetchReviews = async () => {
            try {
                const { data: reviewsData } = await axios.get(
                    `https://service-sphere-server.vercel.app/services/reviews/my-reviews?userEmail=${user.email}`
                );

                if (reviewsData.length === 0) {
                    setReviews([]);
                    return;
                }

                const serviceDetailsPromises = reviewsData.map((review) =>
                    axios.get(`https://service-sphere-server.vercel.app/services/details/${review.serviceId}`)
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
                axiosSecure.delete(`/services/reviews/my-reviews/${id}`)
                    .then(res => {
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
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the review. Please try again.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    const openModal = (review) => {
        setSelectedReview(review);
        setReviewText(review.reviewText);
        setRating(review.rating);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null);
    };

    const handleUpdateReview = () => {
        const updatedReview = {
            ...selectedReview,
            reviewText,
            rating
        };

        axiosSecure.patch(`/services/reviews/${selectedReview._id}`, updatedReview)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Your review has been updated.", "success");
                    const updatedReviews = reviews.map((review) =>
                        review._id === selectedReview._id ? updatedReview : review
                    );
                    setReviews(updatedReviews);
                    closeModal();
                }
            })
            .catch((err) => {
                Swal.fire("Error!", "Failed to update the review. Please try again.", "error");
            });
    };

    return (
        <div className="max-w-5xl mx-auto min-h-screen py-32">
            <Helmet>
                <title>My Reviews - ServiceSphere</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-10 text-[#2F3640] text-center">My Reviews</h1>
            {reviews.length === 0 ? (
                <div className="text-center text-[#2F3640]">
                    <p>You have no reviews yet.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="bg-white shadow-md p-4 rounded-md flex justify-between items-start"
                        >
                            <div>
                                <h3 className="text-lg text-[#2F3640] font-bold">{review.serviceTitle}</h3>
                                <p className="text-gray-600">{review.reviewText}</p>
                                <p className="text-yellow-500 text-2xl">{'★'.repeat(review.rating)}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap items-center justify-center">
                                <button
                                    onClick={() => openModal(review)}
                                    className="bg-green-500 text-white px-4 py-1 rounded-md"
                                >
                                    Edit
                                </button>
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

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md mt-16 shadow-md w-full max-w-[700px]">
                        <h2 className="text-xl text-center text-white font-bold mb-4">Update Review</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Service Title</label>
                            <input
                                disabled
                                defaultValue={selectedReview.serviceTitle}
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Review Text</label>
                            <textarea
                                className="w-full textarea textarea-bordered"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="Write your review here..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Rating</label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="mt-4 ">
                            <button
                                onClick={handleUpdateReview}
                                className="bg-[#1E8449] shadow-lg text-white w-full py-3 rounded-md hover:bg-[#F39C12]"
                            >
                                Update Review
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 mt-4 w-full text-white px-4 py-3 rounded-md shadow-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReviews;
