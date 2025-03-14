import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-10">
      <div className="container w-full lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left px-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, omnis signiferumque in mei, mei ex enim concludaturque. Senserit salutandi euripidis no per, modus maiestatis scribentur est an.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Latest News</h3>
          <ul className="text-gray-300 text-sm space-y-2 border-t border-gray-500 pt-2">
            <li>aaa</li>
            <li>Tollit cetero cu usu, etiam evertitur id nec</li>
            <li>Ad qui quem reprimique, quo possit detracto</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Popular News</h3>
          <ul className="text-gray-300 text-sm space-y-2 border-t border-gray-500 pt-2">
            <li>Detracto contentiones te est, brute ipsum</li>
            <li>Ex usu vero quaerendum, mei no falli</li>
            <li>Liber utroque vim an amet Latine sa</li>
            <li>Tollit cetero cu usu, etiam evertitur id nec</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2 border-t border-gray-500 pt-2">
            <li>Home</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
