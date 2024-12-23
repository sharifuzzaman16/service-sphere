import React from 'react';

const UpdateService = () => {
    return (
        <div className="max-w-5xl mx-auto my-16 p-6 bg-[#2F3E46] rounded-md">
            <h1 className="text-2xl font-bold text-white mb-6">Update Service</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-white">Service Title</label>
                    <input
                        type="text"
                        value={serviceData.serviceTitle}
                        onChange={(e) => setServiceData({ ...serviceData, serviceTitle: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="Service Title"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white">Description</label>
                    <textarea
                        value={serviceData.description}
                        onChange={(e) => setServiceData({ ...serviceData, description: e.target.value })}
                        className="textarea textarea-bordered w-full"
                        placeholder="Service Description"
                        rows="4"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm text-white">Price</label>
                    <input
                        type="number"
                        value={serviceData.price}
                        onChange={(e) => setServiceData({ ...serviceData, price: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="Service Price"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white">Category</label>
                    <input
                        type="text"
                        value={serviceData.category}
                        onChange={(e) => setServiceData({ ...serviceData, category: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="Service Category"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white">Service Image URL</label>
                    <input
                        type="text"
                        value={serviceData.serviceImage}
                        onChange={(e) => setServiceData({ ...serviceData, serviceImage: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="Service Image URL"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Update Service
                </button>
            </form>
        </div>
    );
};

export default UpdateService;