import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateReview = () => {

    const location = useLocation();
    const serviceTitle = location.state?.serviceTitle;
    const review = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating.value;
        const updatedReview = {
            reviewText,
            rating
        }

        axios.patch(`http://localhost:5000/services/reviews/${review._id}`, updatedReview)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Updated successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/my-reviews');
                }

            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to update review!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })
    }

    return (
        <div className="max-w-5xl mx-auto my-16 p-6 bg-[#2F3E46] rounded-md">
            <Helmet>
                <title>{review ? serviceTitle : "Loading..."} - ServiceSphere</title>
            </Helmet>
            <h1 className="text-2xl text-center font-bold text-white mb-6">Update Your Review</h1>
            <form onSubmit={handleUpdateReview} className="space-y-4">
                <div>
                    <label className="block mb-2 text-sm text-white">Service Title</label>
                    <input
                        disabled
                        type="text"
                        defaultValue={serviceTitle}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm text-white">Review Text</label>
                    <textarea
                        name='reviewText'
                        defaultValue={review.reviewText}
                        className="textarea textarea-bordered w-full"
                        placeholder="Update your review"
                        rows="4"
                    ></textarea>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-white">Rating</label>
                    <input
                        name='rating'
                        type="number"
                        min={1}
                        max={5}
                        defaultValue={review.rating}
                        className="input input-bordered w-full"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Update Review
                </button>
            </form>
        </div>
    );
};

export default UpdateReview;