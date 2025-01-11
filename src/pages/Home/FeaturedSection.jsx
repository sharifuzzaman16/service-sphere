import React, { useEffect, useState } from "react";
import ServiceCard from '../../components/ServiceCard';
import axios from 'axios';

const FeaturedSection = () => {

    const [featuredServices, setFeaturedServices] = useState([]);

    useEffect(() => {
        axios.get('https://service-sphere-server.vercel.app/services/featured-services')
            .then((res) => {
                setFeaturedServices(res.data)
            })
    }, [])


    return (
        <div className="">
            <h1 className='text-[#2F3640] font-bold text-4xl text-center'>Featured Section</h1>
            <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-14 mt-10'>
                {
                    featuredServices.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedSection;