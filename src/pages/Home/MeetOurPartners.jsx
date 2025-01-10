import React from 'react';
import img1 from '../../assets/partners/amazon-removebg-preview.png';
import img2 from '../../assets/partners/hersheys-removebg-preview.png';
import img3 from '../../assets/partners/Intel-removebg-preview.png';
import img4 from '../../assets/partners/LogoDesign-02-Logos-removebg-preview.png';
import img5 from '../../assets/partners/hersheys-removebg-preview.png';
import img6 from '../../assets/partners/Intel-removebg-preview.png';
import img7 from '../../assets/partners/nestle-removebg-preview.png';
import img8 from '../../assets/partners/LogoDesign-02-Logos-removebg-preview.png';
import img9 from '../../assets/partners/amazon-removebg-preview.png';
import img10 from '../../assets/partners/nestle-removebg-preview.png';
import img11 from '../../assets/partners/Intel-removebg-preview.png';
import img12 from '../../assets/partners/LogoDesign-02-Logos-removebg-preview.png';

const MeetOurPartners = () => {
    const partners = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    return (
        <div className="pt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#2F3640] mb-8">Meet Our Partners</h2>


                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
                    {partners.map((partner, index) => (
                        <div key={index} className="relative w-[150px] h-[100px] overflow-hidden group cursor-pointer shadow-sm">
                            {/* First (Default) Image */}
                            <img
                                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-100%]"
                                src={partner}
                                alt={`Partner ${index + 1}`}
                            />
                            {/* Second (Hover) Image */}
                            <img
                                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out transform translate-y-[100%] group-hover:translate-y-0"
                                src={partner}
                                alt={`Partner ${index + 1} Hover`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MeetOurPartners;
