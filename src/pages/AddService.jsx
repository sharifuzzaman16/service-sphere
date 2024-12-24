import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {

    const { user } = useContext(AuthContext);

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceTitle = form.serviceTitle.value;
        const companyName = form.companyName.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const addedDate = new Date().toISOString();
        const userEmail = user.email;

     
        if (!serviceImage || !serviceTitle || !companyName || !category || !price) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "All fields are required!",
                showConfirmButton: true,
            });
            return;
        }

        if (isNaN(price) || price <= 0) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Price must be a valid number greater than 0",
                showConfirmButton: true,
            });
            return;
        }

        const service = {
            serviceImage,
            serviceTitle,
            companyName,
            website,
            description,
            category,
            price,
            addedDate,
            userEmail
        }

        axios.post('http://localhost:5000/services', service)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Service added successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to add service!",
                    text: err.response?.data?.message || err.message,
                    showConfirmButton: true,
                });
            })

    }

    return (
        <div className="max-w-4xl my-16 mx-auto p-8 bg-[#2F3E46] shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-white text-center mb-6">Add a New Service</h1>
            <form onSubmit={handleAddService} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Image</label>
                    <input name='serviceImage' type="url" placeholder="Service image URL" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Title</label>
                    <input name='serviceTitle' type="text" placeholder="Service title" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input name='companyName' type="text" placeholder="Company name" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input name='website' type="url" placeholder="Website URL" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea name='description' className="w-full textarea textarea-bordered" placeholder="Description"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                    >
                        <option disabled value="">Select a category</option>
                        <option value="technology">Technology and IT</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="finance">Finance and Accounting</option>
                        <option value="marketing">Marketing and Sales</option>
                        <option value="engineering">Engineering</option>
                        <option value="design">Creative and Design</option>
                        <option value="construction">Construction and Real Estate</option>
                        <option value="hospitality">Hospitality and Tourism</option>
                        <option value="administration">Administrative and Support Services</option>
                        <option value="legal">Legal</option>
                        <option value="media">Media and Communications</option>
                        <option value="science">Science and Research</option>
                        <option value="transport">Transport and Logistics</option>
                        <option value="retail">Retail and Customer Service</option>
                        <option value="trades">Skilled Trades</option>
                        <option value="remote">Remote and Freelance Jobs</option>
                        <option value="green">Green and Sustainable Jobs</option>
                        <option value="ecommerce">E-commerce</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                    <input name='price' type="number" placeholder="Price" className="input input-bordered w-full" />
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

export default AddService;
