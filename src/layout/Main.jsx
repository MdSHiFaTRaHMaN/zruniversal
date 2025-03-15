import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import ContactInfo from '../components/ContactInfo';

const Main = () => {
    return (
        <div>
          <Topbar />
          <Navbar />
          <Outlet />
          <ContactInfo />
          <Footer />
        </div>
    );
};

export default Main;