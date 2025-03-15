import React from 'react';
import Bannar from './Bannar';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Portfolio from './Portfolio';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import StatsSection from './StatsSection';
import PhotoGallery from './PhotoGallery';
import RecentPosts from './RecentPosts';

const Home = () => {
    return (
        <div>
            <Bannar />
            <WhyChooseUs />
            <Services />
            <Portfolio />
            <TeamSection />
            <TestimonialSection />
            <FAQSection />
            <StatsSection />
            <PhotoGallery />
            <RecentPosts />
        </div>
    );
};

export default Home;