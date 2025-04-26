import React from "react";
import { Collapse } from "antd";
import { FaChevronDown } from "react-icons/fa";
import FaqImage from "../../assets/faq.svg";
// import FaqImage from "../../assets/faq_main_photo.png";
import "antd/dist/reset.css";

const { Panel } = Collapse;

const faqs = [
  {
    question: "What types of construction services do you offer?",
    answer:
      "We offer residential, commercial, renovation, and interior design services tailored to meet your needs.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "The duration varies depending on the project scope. Small renovations might take weeks, while larger projects could take several months.",
  },
  {
    question: "Is Zruniversal licensed and insured?",
    answer:
      "Yes, Zruniversal is fully licensed and insured to undertake all kinds of construction projects.",
  },
  {
    question: "Do you offer free consultations and project estimates?",
    answer:
      "Absolutely! We offer free consultations and detailed project estimates after site inspection.",
  },
  {
    question: "Can I make changes to my project after it has started?",
    answer:
      "Yes, modifications are possible, but they may affect the timeline and project cost slightly.",
  },
  {
    question: "What materials do you use for construction?",
    answer:
      "We use only premium, certified materials ensuring durability, safety, and compliance with industry standards.",
  },
  {
    question: "Do you offer full project management services?",
    answer:
      "Yes, we provide complete project management, from planning and design to execution and handover.",
  },
  {
    question: "Do you provide maintenance services after construction?",
    answer:
      "Yes, we provide post-construction support and maintenance packages to keep your property in top shape.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={FaqImage}
          alt="Construction Worker"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* FAQ Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Have Some Questions?
        </h2>
        <p className="text-gray-600 mt-2">
          Find answers to common questions about our services and processes.
        </p>

        <Collapse
          accordion
          ghost
          expandIcon={({ isActive }) => (
            <FaChevronDown
              rotate={isActive ? 180 : 0}
              className="!text-white !rounded-none"
            />
          )}
          className="mt-4"
        >
          {faqs.map((faq, index) => (
            <Panel
              header={<span className="text-white">{faq.question}</span>}
              key={index}
              className="bg-[#203B63] text-white font-medium my-1"
            >
              <p className="text-white">{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FAQSection;
