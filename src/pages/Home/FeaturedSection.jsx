import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const FeaturedSection = () => {

    const featuredServices = [
        {
            "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYXBpYyUyMGRlc2lnbnxlbnwwfDB8MHx8fDA%3D",
            "title": "Web Development",
            "description": "Custom web development services to build responsive and fast websites.",
            "price": "$500",
            "seeDetailsButton": "See Details"
        },
        {
            "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGljJTIwZGVzaWdufGVufDB8MHwwfHx8MA%3D%3D",
            "title": "Graphic Design",
            "description": "Professional graphic design services for your branding and marketing needs.",
            "price": "$300",
            "seeDetailsButton": "See Details"
        },
        {
            "image": "https://images.unsplash.com/photo-1686061594183-8c864f508b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VvJTIwb3B0aW1haXplaXRvbnxlbnwwfDB8MHx8fDA%3D",
            "title": "SEO Optimization",
            "description": "Improve your website's search engine ranking with our SEO optimization services.",
            "price": "$200",
            "seeDetailsButton": "See Details"
        },
        {
            "image": "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHwwfDB8fHww",
            "title": "Mobile App Development",
            "description": "Create custom mobile apps for both iOS and Android with top-notch functionality.",
            "price": "$1000",
            "seeDetailsButton": "See Details"
        },
        {
            "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMHdyaXRlaW5nfGVufDB8MHwwfHx8MA%3D%3D",
            "title": "Content Writing",
            "description": "Engaging and SEO-friendly content writing for blogs, articles, and websites.",
            "price": "$150",
            "seeDetailsButton": "See Details"
        },
        {
            "image": "https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfDB8MHx8fDA%3D",
            "title": "Digital Marketing",
            "description": "Comprehensive digital marketing services to boost your online presence.",
            "price": "$400",
            "seeDetailsButton": "See Details"
        }
    ]


    return (
        <>
            <h1 className='text-white font-bold text-3xl text-center mt-20'>Featured Section</h1>
            <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-8 mt-10'>
                {
                    featuredServices.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default FeaturedSection;