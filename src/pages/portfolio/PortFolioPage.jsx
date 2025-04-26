import React from 'react';
import PortfolioBannar from './PortfolioBannar';
import Portfolio from './Portfolio';

const PortFolioPage = () => {
    return (
        <div className='px-1.5'>
            <PortfolioBannar />
            <Portfolio />
        </div>
    );
};

export default PortFolioPage;