import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-10">
      <div className="container w-full lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left px-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-gray-300 text-sm">
            Zruniversal is a trusted name in the construction and renovation
            industry, known for delivering top-quality workmanship with
            integrity. From residential projects to commercial builds, we are
            committed to excellence, safety, and client satisfaction.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Latest News</h3>
          <ul className="text-gray-300 text-sm space-y-2 border-t border-gray-500 pt-2">
            <li>New project launch in Brooklyn Heights</li>
            <li>Zruniversal awarded Safety Excellence 2025</li>
            <li>Eco-friendly materials in modern construction</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Popular News</h3>
          <ul className="text-gray-300 text-sm space-y-2 border-t border-gray-500 pt-2">
            <li>5 Signs Your Property Needs Restoration</li>
            <li>How Waterproofing Extends Building Life</li>
            <li>Brownstone Revival: A NYC Specialty</li>
            <li>Top Trends in Urban Construction 2025</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2 border-t border-gray-500 pt-2 grid grid-cols-1">
            <Link>Home</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
