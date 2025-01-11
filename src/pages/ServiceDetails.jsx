import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();
    const axiosSecure = useAxiosSecure();

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.review.value;
        const rating = form.rating.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const userPhoto = user.photoURL;
        const reviewDate = new Date().toISOString();
        const serviceId = service._id;

        const review = {
            reviewText,
            rating,
            userName,
            userEmail,
            userPhoto,
            reviewDate,
            serviceId
        }

        axiosSecure.post('/services/reviews', review)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Review added successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setReviews(prevReviews => [{ ...review, _id: res.data.insertedId }, ...prevReviews]);

                    form.reset();
                }
            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to add review!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })
    }


    useEffect(() => {
        axios.get(`https://service-sphere-server.vercel.app/services/reviews?serviceId=${service._id}`)
            .then(res => {
                setReviews(res.data)
            })
            .catch(err => {
            })
    }, [])


    return (
        <div className="max-w-5xl mx-auto py-32">
            <Helmet>
                <title>{service ? service.serviceTitle : "Loading..."} - ServiceSphere</title>
            </Helmet>
            <div className="bg-white shadow-md rounded-md p-6">
                <img
                    src={service.serviceImage}
                    alt={service.serviceTitle}
                    className="w-full h-64 object-cover rounded-md"
                />
                <h1 className="text-2xl text-[#2F3640] font-bold mt-4">{service.serviceTitle}</h1>
                <p className="text-gray-500 mt-2">{service.description}</p>
                <p className="mt-2">
                    <strong>Category:</strong> {service.category}
                </p>
                <p className="mt-2">
                    <strong>Price:</strong> ${service.price}
                </p>
                <p className="mt-2">
                    <strong>Company:</strong> {service.companyName}
                </p>
                <p className="mt-2">
                    <Link href={service.website} className="text-blue-600 underline">
                        Visit Website
                    </Link>
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-xl text-[#2F3640] font-bold mb-4">
                    Reviews ({reviews.length})
                </h2>
                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div key={review._id} className="bg-white p-4 rounded-md shadow-sm">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={review.userPhoto}
                                    alt={review.userName}
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="font-bold text-[#2F3640]">{review.userName}</p>
                            </div>
                            <p className="mt-2">{review.reviewText}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-2xl">
                                    {'★'.repeat(review.rating)}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 bg-white p-6 shadow-md rounded-md">
                <h3 className="text-lg font-bold mb-4">Add Your Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <textarea required name='review' className="textarea textarea-bordered w-full" placeholder="Write your review"></textarea>
                    <div>
                        <label className="block text-sm font-medium">Rating</label>
                        <input
                            required
                            name='rating'
                            type="number"
                            max={5}
                            min={1}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button
                        className="bg-[#1E8449] text-white px-4 py-2 rounded-md hover:bg-[#F39C12]"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;