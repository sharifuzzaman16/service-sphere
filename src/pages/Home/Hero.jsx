import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const bannerVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 }
    }

    return (
        <Slider {...settings}>
            <motion.div
                variants={bannerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
            >
                <div
                    className="hero w-full h-[450px] bg-no-repeat bg-center bg-cover"
                    style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1727893141025-35d62b3f4a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxzZXJ2aWNlfGVufDB8MHwwfHx8MA%3D%3D)",
                    }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-white">Discover, Review, and Share <br /> Your Experiences</h1>
                            <p className="mb-5 text-white">
                                Find trusted services and share your insights with a community that values your voice.
                            </p>
                            <button className="px-4 py-3 rounded bg-[#007BFF] text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={bannerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
            >
                <div
                    className="hero w-full h-[450px] bg-no-repeat bg-center bg-cover"
                    style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1519624133901-3420156d01b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlcnZpY2V8ZW58MHwwfDB8fHww)",
                    }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-white">Discover, Review, and Share <br /> Your Experiences</h1>
                            <p className="mb-5 text-white">
                                Find trusted services and share your insights with a community that values your voice.
                            </p>
                            <button className="text-white bg-[#007BFF] rounded px-4 py-3">Get Started</button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={bannerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
            >
                <div
                    className="hero w-full h-[450px] bg-no-repeat bg-center bg-cover"
                    style={{
                        backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661632701774-bffbcf314a5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHNlcnZpY2V8ZW58MHwwfDB8fHww)",
                    }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-white">Discover, Review, and Share <br /> Your Experiences</h1>
                            <p className="mb-5 text-white">
                                Find trusted services and share your insights with a community that values your voice.
                            </p>
                            <button className="bg-[#007BFF] px-4 py-3 rounded text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Slider>
    );
};

export default Hero;