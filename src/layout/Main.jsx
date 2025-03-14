import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';

const Main = () => {
    return (
        <div>
          <Topbar />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    );
};

export default Main;