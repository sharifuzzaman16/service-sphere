import React from 'react';

const MyServices = () => {

    const services = [
        {
          id: 1,
          image: 'https://via.placeholder.com/300x200',
          title: 'Custom Logo Design',
          category: 'Graphic Design',
          price: 200,
          userEmail: 'user1@example.com',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/300x200',
          title: 'E-commerce Website Development',
          category: 'Web Development',
          price: 1200,
          userEmail: 'user1@example.com',
        },
      ];
      

    return (
        <div className="max-w-7xl mx-auto my-16">
            <h1 className="text-2xl font-bold mb-6">My Services</h1>
            <input
                type="text"
                placeholder="Search services..."
                className="mb-6 w-full p-2 border rounded-md"
            />
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
                    {services.map((service, index) => (
                        <tr key={index} className="border-t">
                            <td className="p-4">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                            </td>
                            <td className="p-4">{service.title}</td>
                            <td className="p-4">{service.category}</td>
                            <td className="p-4">${service.price}</td>
                            <td className="p-4 space-x-2">
                                <button
                                    className="bg-green-500 text-white px-4 py-1 rounded-md"
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-1 rounded-md"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyServices;