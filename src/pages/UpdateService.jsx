import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateService = () => {

    const service = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceTitle = form.serviceTitle.value;
        const companyName = form.companyName.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;

        const updatedService = {
            serviceImage,
            serviceTitle,
            companyName,
            website,
            description,
            category,
            price,
        }
        axios.patch(`http://localhost:5000/services/my-services/${service._id}`, updatedService)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Service updated successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/my-services')
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to update service!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })

    }

    return (
        <div className="max-w-4xl my-16 mx-auto p-8 bg-[#2F3E46] shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-white text-center mb-6">Add a New Service</h1>
            <form onSubmit={handleUpdateService} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Image</label>
                    <input defaultValue={service.serviceImage} name='serviceImage' type="url" placeholder="Service image" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Title</label>
                    <input defaultValue={service.serviceTitle} name='serviceTitle' type="text" placeholder="Service title" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input defaultValue={service.companyName} name='companyName' type="text" placeholder="Company name" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input defaultValue={service.website} name='website' type="url" placeholder="Website url" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea defaultValue={service.description} name='description' className="w-full textarea textarea-bordered" placeholder="Description"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                        defaultValue={service.category}
                        name="category"
                        className="select select-bordered w-full"
                    >
                        <option disabled value="">Select a category</option>
                        <option value="web-design">Web Design</option>
                        <option value="graphic-design">Graphic Design</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                    <input defaultValue={service.price} name='price' type="number" placeholder="Price" className="input input-bordered w-full" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 w-full text-white px-4 py-3 rounded-md hover:bg-blue-700"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default UpdateService;