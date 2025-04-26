import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaBusinessTime } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhoneCall, PiPhoneCallFill } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <div className="bg-yellow-500 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black">
        <div className="flex flex-col items-center">
          <FaMapMarkedAlt className="text-5xl mb-3 text-gray-800" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p>433 Atkins Ave, Brooklyn,</p>
          <p> NY 11208,</p>
        </div>
        <div className="flex flex-col items-center">
          <MdEmail className="text-5xl mb-3 text-gray-800" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p>contact@zruniversal.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-5xl mb-3 text-gray-800" />
          <h3 className="text-lg font-semibold">Call Us</h3>
          <p className="flex items-center gap-2">
            646 725 4245{" "}
            <a href="tel:6467254245">
              <PiPhoneCallFill size={20} />
            </a>
          </p>
          <p className="flex items-center gap-2">
            347 307 4632{" "}
            <a href="tel:347 307 4632">
              <PiPhoneCallFill size={20} />
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaBusinessTime className="text-5xl mb-3 text-gray-800" />
          <h3 className="text-lg font-semibold">Working Hours</h3>
          <p>Monday-Friday (9:00 AM - 5:00 PM)</p>
          <p>Saturday and Sunday: Off</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
