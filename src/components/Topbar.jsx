import React from "react";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Topbar = () => {
  return (
    <div className=" bg-[#203B63] py-4">
      <div className="flex items-center justify-between w-full lg:w-10/12 mx-auto text-white">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <MdEmail />
            <h3>zruniversal@gmail.com</h3>
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt />
            <h3>123-456-7878</h3>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebook />
          <BsTwitter />
          <FaPinterest />
          <BsLinkedin />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
