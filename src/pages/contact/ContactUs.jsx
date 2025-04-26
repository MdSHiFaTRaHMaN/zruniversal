import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message_html: formData.message,
    };

    emailjs
      .send(
        "service_g7zs9ad", // e.g. "service_g7zs9ad"
        "template_vu2be93", // e.g. "template_6wz3x03" template_vu2be93
        templateParams,
        "lVJmflgaWp1a1o3Cg" // e.g. "lVJmflgaWp1a1o3Cg"
      )
      .then(() => {
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        message.error("Failed to send message.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Contact us using the Following Form
          </h2>
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block font-medium mb-1">Name *</label>
              <Input
                size="large"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address *</label>
              <Input
                size="large"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <Input
                size="large"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message *</label>
              <Input.TextArea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="bg-[#203B63] rounded font-semibold hover:!bg-yellow-400 hover:!text-black"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>

        <div className="relative w-full h-[400px]">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" /> Find Us On Map
          </h2>
          {/* <iframe
            className="w-full h-full rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2718685580594!2d-73.87945492450395!3d40.6679783403102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25da586b0a1d1%3A0x2b633561b6227de3!2s433%20Atkins%20Ave%2C%20Brooklyn%2C%20NY%2011208%2C%20USA!5e0!3m2!1sen!2sbd!4v1745657142100!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
