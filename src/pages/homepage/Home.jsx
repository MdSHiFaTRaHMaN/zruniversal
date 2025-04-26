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
        <div className='px-1.5'>
            <Bannar />
            <Portfolio />
            {/* <Services /> */}
            <TeamSection />
            <TestimonialSection />
            <StatsSection />
            <PhotoGallery />
            <WhyChooseUs />
            <RecentPosts />
            <FAQSection />
        </div>
    );
};

export default Home;