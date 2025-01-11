import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalServices, setTotalServices] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    axios
      .get('https://service-sphere-server.vercel.app/total-users')
      .then(res => setTotalUsers(res.data.count))
      .catch(err => { });

    axios
      .get('https://service-sphere-server.vercel.app/total-reviews')
      .then(res => setTotalReviews(res.data.count))
      .catch(err => { });

    axios
      .get('https://service-sphere-server.vercel.app/total-services')
      .then(res => setTotalServices(res.data.count))
      .catch(err => { });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div
      className="stats-section bg-[#ffffff] py-10 mt-16 rounded-lg"
      ref={statsRef}
    >
      <h2 className="text-4xl text-[#2F3640] font-bold text-center mb-8">Platform Stats</h2>
      <div className="flex justify-center gap-8">
        <div className="stat-item text-center">
          <h3 className="text-5xl font-bold text-blue-600">
            {isVisible ? <CountUp end={totalUsers} duration={2} /> : totalUsers}
          </h3>
          <p className="text-lg text-[#2F3640]">Total Users</p>
        </div>
        <div className="stat-item text-center">
          <h3 className="text-5xl font-bold text-green-600">
            {isVisible ? <CountUp end={totalReviews} duration={2} /> : totalReviews}
          </h3>
          <p className="text-lg text-[#2F3640]">Total Reviews</p>
        </div>
        <div className="stat-item text-center">
          <h3 className="text-5xl font-bold text-purple-600">
            {isVisible ? <CountUp end={totalServices} duration={2} /> : totalServices}
          </h3>
          <p className="text-lg text-[#2F3640]">Total Services</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
