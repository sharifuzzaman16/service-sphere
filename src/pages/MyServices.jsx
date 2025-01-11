import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axios
            .get(`https://service-sphere-server.vercel.app/services/my-services?userEmail=${user.email}`)
            .then((res) => {
                setServices(res.data);
                setFilteredServices(res.data);
            })
            .catch((err) => {
            });
    }, [user.email]);

    useEffect(() => {
        const filtered = services.filter((service) =>
            service.serviceTitle.toLowerCase().includes(searchQuery) ||
            service.category.toLowerCase().includes(searchQuery) ||
            String(service.price).includes(searchQuery)
        );
        setFilteredServices(filtered);
    }, [searchQuery, services]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/services/my-services/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your service has been deleted.", "success");
                            const updatedServices = services.filter((service) => service._id !== id);
                            setServices(updatedServices);
                            setFilteredServices(updatedServices);
                        }
                    })
                    .catch((err) => {
                    });
            }
        });
    };

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    };

    const handleUpdateService = (updatedService) => {
        axiosSecure
            .patch(`/services/my-services/${updatedService._id}`, updatedService)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire("Success!", "Service updated successfully.", "success");
                    const updatedServices = services.map((service) =>
                        service._id === updatedService._id ? updatedService : service
                    );
                    setServices(updatedServices);
                    setFilteredServices(updatedServices);
                    closeModal();
                }
            })
            .catch((err) => {
            });
    };

    return (
        <div className="max-w-7xl mx-auto py-32 min-h-screen">
            <Helmet>
                <title>My Services - ServiceSphere</title>
            </Helmet>
            <div className="flex items-center justify-center flex-col mb-6">
                <h1 className="text-4xl text-[#2F3640] font-bold mb-6">My Services</h1>
                <label className="input input-bordered w-full max-w-xs flex items-center gap-2">
                    <input
                        onChange={handleSearch}
                        value={searchQuery}
                        type="text"
                        className="grow"
                        placeholder="Search"
                    />
                </label>
            </div>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-white">
                        <th className="p-4 text-[#2F3640]">Image</th>
                        <th className="p-4 text-[#2F3640]">Title</th>
                        <th className="p-4 text-[#2F3640]">Category</th>
                        <th className="p-4 text-[#2F3640]">Price</th>
                        <th className="p-4 text-[#2F3640] text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (
                            <tr key={index} className="border-t">
                                <td className="p-4">
                                    <img
                                        src={service.serviceImage}
                                        alt={service.serviceTitle}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>
                                <td className="p-4">{service.serviceTitle}</td>
                                <td className="p-4">{service.category}</td>
                                <td className="p-4">${service.price}</td>
                                <td className="p-4 flex items-center justify-center gap-2 flex-wrap">
                                    <button
                                        onClick={() => openModal(service)}
                                        className="bg-green-500 text-white px-4 py-1 rounded-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center p-4">
                                No results found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isModalOpen && (
                <UpdateServiceModal
                    service={selectedService}
                    onClose={closeModal}
                    onUpdate={handleUpdateService}
                />
            )}
        </div>
    );
};

const UpdateServiceModal = ({ service, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({ ...service });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white mt-16 rounded-md shadow-md w-full max-w-[700px] h-[75vh] overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-xl text-[#2F3640] text-center font-bold mb-4">Edit Service</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Service Image</label>
                            <input
                                name="serviceImage"
                                value={formData.serviceImage}
                                onChange={handleChange}
                                type="url"
                                placeholder="Service image URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Service Title</label>
                            <input
                                name="serviceTitle"
                                value={formData.serviceTitle}
                                onChange={handleChange}
                                type="text"
                                placeholder="Service title"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Company Name</label>
                            <input
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Company name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Website</label>
                            <input
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                type="url"
                                placeholder="Website URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="textarea textarea-bordered w-full"
                                placeholder="Description"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                            >
                                <option disabled value="">
                                    Select a category
                                </option>
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
                            <label className="block text-sm font-medium mb-2">Price</label>
                            <input
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#1E8449] shadow-lg w-full text-white px-4 py-3 rounded-md hover:bg-[#F39C12]"
                        >
                            Update Service
                        </button>
                    </form>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 shadow-lg mt-4 text-white px-4 py-3 rounded-md w-full"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


export default MyServices;
