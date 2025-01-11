import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const ServiceCard = ({ service }) => {
    console.log(service)

    return (
        <div className="service-card">
            <div style={{ backgroundImage: `url(${service.serviceImage})` }} className="imgBx">
                <div className="badge bg-[#E9F7EF] m-3">{service.category}</div>
            </div>
            <div className="content">
                <span className="price">
                    <p className='text-center'>$ {service.price}</p>
                </span>
                <h2 className='text-[#2F3640] h-10 font-semibold text-xl mt-2'>{service.serviceTitle}</h2>
                <div className="border-b-2 mb-4 mt-6"></div>
                <Link to={`/services/details/${service._id}`}>
                    <button className='bg-[#1E8449] hover:bg-[#F39C12] transition text-white w-full py-2 rounded-md'>See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
