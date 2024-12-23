import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
        .then((res) => {
            console.log(res.data)
            setServices(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div className="max-w-7xl mx-auto my-16 w-4/5">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </div>
      </div>
    );
};

export default Services;