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
    };

    return (
        <Slider className='relative top-[100px] mb-40' {...settings}>
            {["https://images.unsplash.com/photo-1727893141025-35d62b3f4a03?w=500&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1519624133901-3420156d01b2?w=500&auto=format&fit=crop&q=60",
              "https://plus.unsplash.com/premium_photo-1661632701774-bffbcf314a5b?w=500&auto=format&fit=crop&q=60"].map((image, index) => (
                <motion.div
                    key={index}
                    variants={bannerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1 }}
                >
                    <div
                        className="hero rounded-lg w-full h-[500px] relative bg-no-repeat bg-center bg-cover"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(44, 62, 80, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
                        }}>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                            <h1 className="mb-5 text-5xl font-bold text-white">
                                Discover, Review, and Share <br /> Your Experiences
                            </h1>
                            <p className="mb-5 text-xl text-gray-200 leading-relaxed">
                                Find trusted services and share your insights with a community that values your voice.
                            </p>
                            <button className="px-6 py-3 rounded-md bg-[#1E8449] text-white font-semibold shadow-lg hover:bg-[#F39C12] transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </Slider>
    );
};

export default Hero;
