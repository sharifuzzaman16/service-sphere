import React from 'react';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';
import MeetOurPartners from './MeetOurPartners';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - ServiceSphere</title>
            </Helmet>
            <section>
                <Hero></Hero>
            </section>
            <section className='w-4/5 mx-auto'>
                <FeaturedSection></FeaturedSection>
            </section>
            <section className='w-4/5 mx-auto'>
                <MeetOurPartners></MeetOurPartners>
            </section>
            <section className='w-4/5 mx-auto'>
                <Testimonials></Testimonials>
            </section>
            <section className='w-4/5 mx-auto'>
                <CallToAction></CallToAction>
            </section>

        </>
    );
};

export default Home;