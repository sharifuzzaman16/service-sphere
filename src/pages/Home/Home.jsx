import React from 'react';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';
import MeetOurPartners from './MeetOurPartners';

const Home = () => {
    return (
        <>
            <section>
                <Hero></Hero>
            </section>
            <section className='w-4/5 mx-auto'>
                <FeaturedSection></FeaturedSection>
            </section>
            <section className='w-4/5 mx-auto'>
                <MeetOurPartners></MeetOurPartners>
            </section>

        </>
    );
};

export default Home;