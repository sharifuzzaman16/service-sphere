import React, { useEffect, useState } from "react";
import ServiceCard from '../../components/ServiceCard';
import axios from 'axios';

const FeaturedSection = () => {

    const [featuredServices, setFeaturedServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services/featured-services')
        .then((res) => {
            console.log(res.data)
            setFeaturedServices(res.data)
        })
    }, [])


    return (
        <>
            <h1 className='text-white font-bold text-3xl text-center mt-16'>Featured Section</h1>
            <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-10'>
                {
                    featuredServices.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default FeaturedSection;