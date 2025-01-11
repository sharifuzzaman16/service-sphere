import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import statImg from '../../assets/stat-img.jpg'

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
    <div className="container mx-auto mt-16">
      <h2 className="text-4xl font-semibold text-center text-[#2F3640] mb-10">Platform Stats</h2>
      <div className='w-full h-[350px] bg-white rounded-lg flex justify-between'>
        <div className='w-[40%] h-full relative'>
          <img src={statImg} alt="" className="w-full h-full rounded-l-lg object-cover" />
          <div class="absolute inset-0 bg-[#E9F7EF] bg-opacity-20 rounded-l-lg"></div>
        </div>
        <div className='w-[60%] p-10'>
          <h2 className='text-[#2F3640] text-4xl font-bold '>Discover, Review, and Share Your Experiences</h2>
          <p className='text-gray-500 text-xl mt-2'>Find trusted services and share your insights with a community that values your voice.</p>
          <div className="stats shadow bg-none rounded-lg mt-6">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="stat-title">Total Users</div>
              <div className="stat-value">{isVisible ? <CountUp end={totalUsers} duration={2} /> : totalUsers}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div className="stat-title">Total Services</div>
              <div className="stat-value">{isVisible ? <CountUp end={totalServices} duration={2} /> : totalServices}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div className="stat-title">Total Reviews</div>
              <div className="stat-value">{isVisible ? <CountUp end={totalReviews} duration={2} /> : totalReviews}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
