import React from "react";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="bg-[#203B63] py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-white">
        <div className="flex flex-col md:flex-row items-center gap-0 lg:gap-5 text-sm">
          <span className="flex items-center gap-2">
            <MdEmail className="text-lg" />
            <h3>universalbuildernyc@gmail.com </h3>
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-lg" />
            <h3>0646 725 4245</h3>
          </span>
        </div>
        <div className="flex items-center gap-4 mt-3 md:mt-0 text-lg">
          <FaFacebook className="cursor-pointer hover:text-blue-400" />
          <BsTwitter className="cursor-pointer hover:text-blue-300" />
          <FaPinterest className="cursor-pointer hover:text-red-500" />
          <BsLinkedin className="cursor-pointer hover:text-blue-600" />
          <BsYoutube className="cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
