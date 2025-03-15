import React from "react";
import { Input, Button } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Contact us using the Following Form
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name *</label>
              <Input size="large" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address *</label>
              <Input size="large" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <Input size="large" type="tel" placeholder="Enter your phone" />
            </div>
            <div>
              <label className="block font-medium mb-1">Message *</label>
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </div>
            <Button
              type="primary"
              size="large"
              className="bg-[#203B63] rounded font-semibold hover:!bg-yellow-400 hover:!text-black"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>

        {/* Google Map */}
        <div className="relative w-full h-[400px]">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" /> Find Us On Map
          </h2>
          <iframe
            className="w-full h-full rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24169.769796119175!2d-74.00601521376315!3d40.7127751556558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1788c23761%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1678745748732!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
