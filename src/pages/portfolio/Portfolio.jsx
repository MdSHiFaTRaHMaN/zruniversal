import { useState } from "react";
import Service1 from "../../assets/services/Services1.jpeg";
import Service2 from "../../assets/services/services2.png";
import Service3 from "../../assets/services/service3.jpg";
import Service4 from "../../assets/services/services4.jpg";
import Service5 from "../../assets/services/services5.png";
import Service6 from "../../assets/services/services6.png";
import Service7 from "../../assets/services/services7.jpg";
import Service8 from "../../assets/services/services8.jpg";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const services = [
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

const tab = [
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

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredServices =
    selectedCategory === "ALL"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="container mx-auto w-full lg:w-10/12 py-12">
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {tab.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(item)}
            className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-2 px-5 ${
              selectedCategory === item ? "bg-yellow-400 text-black" : ""
            }`}
          >
            <span className="w-56 h-48 rounded bg-[#F8BE2E] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">
              {item}
            </span>
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div key={index} className="shadow-lg border overflow-hidden">
            {/* Image Section */}
            <img
              src={service.image}
              alt="Industry Training"
              className="w-full h-48 object-cover"
            />
            <div className="w-full h-[4px] bg-yellow-400"></div>
            {/* Content Section */}
            <div className="bg-blue-900 text-white p-6">
              <h2 className="text-xl font-bold text-yellow-400">
                {service.title}
              </h2>
              <p className="mt-2 text-sm">{service.description}</p>
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

export default Portfolio;
