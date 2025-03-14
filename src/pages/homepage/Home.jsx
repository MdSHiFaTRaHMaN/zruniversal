import React from 'react';
import Bannar from './Bannar';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Portfolio from './Portfolio';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';

const Home = () => {
    return (
        <div>
            <Bannar />
            <WhyChooseUs />
            <Services />
            <Portfolio />
            <TeamSection />
            <TestimonialSection />
        </div>
    );
};

export default Home;