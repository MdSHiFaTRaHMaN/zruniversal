import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import ContactInfo from '../components/ContactInfo';
import Navbartest from '../components/Navbartest';

const Main = () => {
    return (
        <div>
          <Topbar />
          {/* <Navbar /> */}
          <Navbartest />
          <Outlet />
          <ContactInfo />
          <Footer />
        </div>
    );
};

export default Main;