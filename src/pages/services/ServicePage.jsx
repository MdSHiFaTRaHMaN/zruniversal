import React from 'react';
import ServiceBannar from './ServiceBannar';
import Services from './Services';

const ServicePage = () => {
    return (
        <div className='px-1.5'>
            <ServiceBannar />
            <Services />
        </div>
    );
};

export default ServicePage;