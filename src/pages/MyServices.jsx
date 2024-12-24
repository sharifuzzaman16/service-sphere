import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/services/my-services?userEmail=${user.email}`)
            .then((res) => {
                console.log(res.data);
                setServices(res.data);
                setFilteredServices(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const filtered = services.filter((service) =>
            service.serviceTitle.toLowerCase().includes(searchQuery) || service.category.toLowerCase().includes(searchQuery) || String(service.price).includes(searchQuery)
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/services/my-services/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                            const updatedServices = services.filter(service => service._id !== id);
                            setServices(updatedServices);
                            setFilteredServices(updatedServices);
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        });
    }

    return (
        <div className="max-w-7xl mx-auto my-16">
            <Helmet>
                <title>My Services - ServiceSphere</title>
            </Helmet>
            <div className="flex items-center justify-center flex-col mb-6">
                <h1 className="text-2xl text-white font-bold mb-6">My Services</h1>
                <label className="input input-bordered w-full max-w-xs flex items-center gap-2">
                    <input
                        onChange={handleSearch}
                        value={searchQuery}
                        type="text"
                        className="grow"
                        placeholder="Search"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-[#2F3E46]">
                        <th className="p-4">Image</th>
                        <th className="p-4">Title</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Actions</th>
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
                                <td className="p-4 space-x-2">
                                    <Link to={`/my-services/update/${service._id}`}>
                                        <button className="bg-green-500 text-white px-4 py-1 rounded-md">
                                            Edit
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(service._id)} className="bg-red-500 text-white px-4 py-1 rounded-md">
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
        </div>
    );
};

export default MyServices;
