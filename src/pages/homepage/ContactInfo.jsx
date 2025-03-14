import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaBusinessTime } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-yellow-500 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-black">
        <div className="flex flex-col items-center">
          <FaMapMarkedAlt className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p>Lane A21, ABC Street,</p>
          <p>New York, USA.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">Call Us</h3>
          <p>111-222-3333</p>
          <p>111-222-4444</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBusinessTime className="text-5xl mb-3" />
          <h3 className="text-lg font-semibold">Working Hours</h3>
          <p>Monday-Friday (9:00 AM - 5:00 PM)</p>
          <p>Saturday and Sunday: Off</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
