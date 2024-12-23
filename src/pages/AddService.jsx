import React from 'react';

const AddService = () => {
    return (
        <div className="max-w-4xl my-16 mx-auto p-8 bg-[#2F3E46] shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-white mb-6">Add a New Service</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Service Image</label>
          <input type="url" placeholder="Service image" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Service Title</label>
          <input type="text" placeholder="Service title" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
          <input type="text" placeholder="Company name" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
          <input type="url" placeholder="Website url" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea className="w-full textarea textarea-bordered" placeholder="Description"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
          <select
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
          <input type="number" placeholder="Price" className="input input-bordered w-full" />
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