import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

// Exterior service images
import Service1 from "../../assets/services/Services1.jpeg";
import Service2 from "../../assets/services/services2.png";
import Service3 from "../../assets/services/service3.jpg";
import Service4 from "../../assets/services/services4.jpg";
import Service5 from "../../assets/services/services5.png";
import Service6 from "../../assets/services/services6.png";
import Service7 from "../../assets/services/services7.jpg";
import Service8 from "../../assets/services/services8.jpg";

// Interior service images
import IServices1 from "../../assets/iservices/iservices1.jpeg";
import IServices2 from "../../assets/iservices/iservices2.jpeg";
import IServices3 from "../../assets/iservices/iservices3.jpeg";
import IServices4 from "../../assets/iservices/iservices4.jpeg";
import IServices5 from "../../assets/iservices/iservices5.jpeg";
import IServices6 from "../../assets/iservices/iservices6.jpg";
import IServices7 from "../../assets/iservices/iservices7.png";
import IServices8 from "../../assets/iservices/iservices8.jpg";
import IServices9 from "../../assets/iservices/iservices9.jpg";

const exteriorTabs = [
  "ALL",
  "RESTORATION",
  "WATERPROOFING",
  "ROOFING",
  "CLEANING",
  "BROWNSTONE",
  "MASONRY",
  "FOUNDATION",
  "DEMOLITION",
];

const interiorTabs = [
  "ALL",
  "PLASTERING",
  "RENOVATION",
  "SHEETROCK",
  "TILING",
  "PAINTING",
  "COMPLETE BASEMENT",
  "FLOORING",
  "BATHROOM",
  "KITCHEN",
];

const exteriorServices = [
  {
    title: "Restoration Services",
    category: "RESTORATION",
    description:
      "We restore buildings to their former glory while preserving structural integrity and historical charm.",
    image: Service1,
  },
  {
    title: "Waterproofing Solutions",
    category: "WATERPROOFING",
    description:
      "Protect your structure from water damage with advanced waterproofing systems tailored for long-term results.",
    image: Service2,
  },
  {
    title: "Roofing & Painting",
    category: "ROOFING",
    description:
      "From durable roofing systems to professional-grade painting, we enhance your property’s durability and appearance.",
    image: Service3,
  },
  {
    title: "High-Pressure Cleaning",
    category: "CLEANING",
    description:
      "Restore surfaces with powerful, eco-friendly pressure cleaning for walls, roofs, and exterior spaces.",
    image: Service4,
  },
  {
    title: "Brownstone Renovation",
    category: "BROWNSTONE",
    description:
      "Specialized in brownstone façade repair and restoration, keeping the classic NYC charm intact.",
    image: Service5,
  },
  {
    title: "Stucco & Brick Pointing",
    category: "MASONRY",
    description:
      "Revitalize your building with clean, sharp masonry work — from stucco refinishing to expert brick pointing.",
    image: Service6,
  },
  {
    title: "Foundation Repair",
    category: "FOUNDATION",
    description:
      "Ensure long-term safety and stability with expert foundation inspections, repairs, and reinforcement solutions.",
    image: Service7,
  },
  {
    title: "Demolition & Excavation",
    category: "DEMOLITION",
    description:
      "Safe, efficient demolition and excavation services with proper permits and environmental compliance.",
    image: Service8,
  },
];

const interiorServices = [
  {
    title: "PLASTERING",
    category: "PLASTERING",
    description:
      "Smooth, flawless plastering for walls and ceilings that enhances durability and provides a perfect finish.",
    image: IServices1,
  },
  {
    title: "RENOVATION",
    category: "RENOVATION",
    description:
      "Transform your space with our expert renovation services, tailored to modernize and upgrade.",
    image: IServices2,
  },
  {
    title: "SHEETROCK",
    category: "SHEETROCK",
    description:
      "Professional sheetrock installation and repair for seamless walls and ceilings.",
    image: IServices3,
  },
  {
    title: "TILING",
    category: "TILING",
    description:
      "High-quality tiling that brings color, texture, and character to any room.",
    image: IServices4,
  },
  {
    title: "PAINTING",
    category: "PAINTING",
    description:
      "Precision painting services that add beauty and protection to interiors.",
    image: IServices5,
  },
  {
    title: "COMPLETE BASEMENT",
    category: "COMPLETE BASEMENT",
    description:
      "Full-service basement remodeling for comfortable, functional space below ground.",
    image: IServices6,
  },
  {
    title: "CARPENTRY & FLOORING",
    category: "CARPENTRY, FLOORING",
    description:
      "Custom carpentry and elegant flooring that enhances your property's value.",
    image: IServices7,
  },
  {
    title: "BATHROOM",
    category: "BATHROOM",
    description:
      "Complete remodeling for bathrooms that boost comfort and style.",
    image: IServices8,
  },
  {
    title: "KITCHEN",
    category: "KITCHEN",
    description:
      "Complete remodeling for kitchens that boost comfort and style.",
    image: IServices9,
  },
];

const Services = () => {
  const [exteriorCategory, setExteriorCategory] = useState("ALL");
  const [interiorCategory, setInteriorCategory] = useState("ALL");

  const filteredExterior =
    exteriorCategory === "ALL"
      ? exteriorServices
      : exteriorServices.filter((s) => s.category === exteriorCategory);

  const filteredInterior =
    interiorCategory === "ALL"
      ? interiorServices
      : interiorServices.filter((s) => s.category === interiorCategory);

  return (
    <div className="container mx-auto w-full lg:w-10/12 py-12">
      {/* EXTERIOR SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exterior Services</h1>
      </div>

      <div className="flex overflow-x-auto gap-2 my-2">
        {exteriorTabs.map((item) => (
          <button
            key={item}
            onClick={() => setExteriorCategory(item)}
            className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-2 px-5 ${
              exteriorCategory === item ? "bg-yellow-400 text-black" : ""
            }`}
          >
            <span className="w-56 h-48 rounded bg-[#F8BE2E] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">
              {item}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredExterior.map((service, index) => (
          <div key={index} className="shadow-lg border overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="w-full h-[4px] bg-yellow-400"></div>
            <div className="bg-blue-900 text-white p-6">
              <h2 className="text-xl font-bold text-yellow-400">
                {service.title}
              </h2>
              <p className="mt-2 text-sm h-[54px]">{service.description}</p>
              <button className="mt-4 flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-500">
                Read More <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INTERIOR SECTION */}
      <div className="flex items-center justify-between mt-10">
        <h1 className="text-2xl font-bold">Interior Services</h1>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide gap-2 my-4">
        {interiorTabs.map((item) => (
          <button
            key={item}
            onClick={() => setInteriorCategory(item)}
            className={`btn whitespace-nowrap relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-2 px-5 ${
              interiorCategory === item ? "bg-yellow-400 text-black" : ""
            }`}
          >
            <span className="w-56 h-48 rounded bg-[#F8BE2E] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">
              {item}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInterior.map((service, index) => (
          <div key={index} className="shadow-lg border overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="w-full h-[4px] bg-yellow-400"></div>
            <div className="bg-blue-900 text-white p-6">
              <h2 className="text-xl font-bold text-yellow-400">
                {service.title}
              </h2>
              <p className="mt-2 text-sm h-[54px]">{service.description}</p>
              <button className="mt-4 flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-500">
                Read More <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
