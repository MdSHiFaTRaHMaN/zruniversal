import React from 'react';
import GalleryBannar from './GalleryBannar';
import PhotoGallery from './PhotoGallery';

const GalleryPage = () => {
    return (
        <div className='px-1.5'>
            <GalleryBannar />
            <PhotoGallery />
        </div>
    );
};

export default GalleryPage;