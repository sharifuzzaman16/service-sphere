import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/services')
      .then((res) => {
        setServices(res.data);
        setFilteredServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filtered = services.filter((service) =>
      service.serviceTitle.toLowerCase().includes(searchQuery) ||
      service.category.toLowerCase().includes(searchQuery) ||
      String(service.price).includes(searchQuery) ||
      service.companyName.toLowerCase().includes(searchQuery)
    );
    setFilteredServices(filtered);
  }, [searchQuery, services]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setSelectedCategory("");
  };

  const handleCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSearchQuery("");

    if (category) {
      const filtered = services.filter((service) => service.category.toLowerCase() === category.toLowerCase());
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-16 w-4/5">
      <Helmet>
        <title>Services - ServiceSphere</title>
      </Helmet>
      <h1 className="text-2xl text-white text-center font-bold mb-10">Services</h1>
      <div className="flex gap-6 items-center justify-between">
        <label className="input input-bordered flex items-center gap-2">
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

        <select
          value={selectedCategory}
          onChange={handleCategory}
          className="select select-bordered"
        >
          <option value="">Search by category</option>
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
      <div className="mt-2">
        <p className="text-lg font-medium">
          Search: ({filteredServices.length}) {filteredServices.length === 1 ? "result" : "results"} found.
        </p>
      </div>
      <div className="divider"></div>



      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => <ServiceCard key={service._id} service={service} />)
        ) : (
          <p className="">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
