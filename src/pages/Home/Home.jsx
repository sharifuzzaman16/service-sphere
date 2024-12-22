import React from 'react';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';

const Home = () => {
    return (
        <>
            <section>
                <Hero></Hero>
            </section>
            <section className='w-4/5 mx-auto'>
                <FeaturedSection></FeaturedSection>
            </section>

        </>
    );
};

export default Home;