import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalServices, setTotalServices] = useState(0);


  useEffect(() => {
    axios.get('http://localhost:5000/total-users')
    .then(res => {
        console.log(res.data);
        setTotalUsers(res.data.count)
    })
    .catch(err => {
        console.log(err)
    })
    axios.get('http://localhost:5000/total-reviews')
    .then(res => {
        console.log(res.data);
        setTotalReviews(res.data.count)
    })
    .catch(err => {
        console.log(err)
    })
    axios.get('http://localhost:5000/total-services')
    .then(res => {
        console.log(res.data);
        setTotalServices(res.data.count)
    })
    .catch(err => {
        console.log(err)
    })
  }, []);

  return (
    <div className="stats-section bg-[#2F3E46] py-10 mt-16 rounded-lg">
      <h2 className="text-3xl text-white font-bold text-center mb-8">Platform Stats</h2>
      <div className="flex justify-center gap-8">
        <div className="stat-item text-center">
          <h3 className="text-5xl font-bold text-blue-600">
            <CountUp enableScrollSpy={true} end={totalUsers} duration={2} />
          </h3>
          <p className="text-lg text-gray-300">Total Users</p>
        </div>
        <div className="stat-item text-center">
          <h3 className="text-5xl font-bold text-green-600">
            <CountUp enableScrollSpy={true} end={totalReviews} duration={2} />
          </h3>
          <p className="text-lg text-gray-300">Total Reviews</p>
        </div>
        <div className="stat-item text-center">
          <h3 className="text-5xl font-bold text-purple-600">
            <CountUp  enableScrollSpy={true}end={totalServices} duration={2} />
          </h3>
          <p className="text-lg text-gray-300">Total Services</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
