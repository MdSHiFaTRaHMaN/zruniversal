import Service1 from "../../assets/services/Services1.jpeg";
import Service2 from "../../assets/services/services2.png";
import Service3 from "../../assets/services/service3.jpg";
import Service4 from "../../assets/services/services4.jpg";
import Service5 from "../../assets/services/services5.png";
import Service6 from "../../assets/services/services6.png";

import IServices1 from "../../assets/iservices/iservices1.jpeg"
import IServices2 from "../../assets/iservices/iservices2.jpeg"
import IServices3 from "../../assets/iservices/iservices3.jpeg"
import IServices4 from "../../assets/iservices/iservices4.jpeg"
import IServices5 from "../../assets/iservices/iservices5.jpeg"
import IServices6 from "../../assets/iservices/iservices6.jpg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Pagination } from "antd";
import { FaArrowRight } from "react-icons/fa";
import ServicesModel from "../../components/ServicesModel";

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
  // {
  //   title: "Foundation Repair",
  //   category: "FOUNDATION",
  //   description:
  //     "Ensure long-term safety and stability with expert foundation inspections, repairs, and reinforcement solutions.",
  //   image: Service7,
  // },
  // {
  //   title: "Demolition & Excavation",
  //   category: "DEMOLITION",
  //   description:
  //     "Safe, efficient demolition and excavation services with proper permits and environmental compliance.",
  //   image: Service8,
  // },
];

const services2 = [
  {
    title: "PLASTERING",
    category: "PLASTERING",
    description:
      "Smooth, flawless plastering for walls and ceilings that enhances durability and provides a perfect finish for painting or decorating.",
    image: IServices1,
  },
  {
    title: "RENOVATION",
    category: "RENOVATION",
    description:
      "Transform your space with our expert renovation services, tailored to modernize, upgrade, and refresh your home or office.",
    image: IServices2,
  },
  {
    title: "SHEETROCK",
    category: "SHEETROCK",
    description:
      "Professional sheetrock installation and repair for strong, seamless walls and ceilings built to last.",
    image: IServices3,
  },
  {
    title: "TILING",
    category: "TILING",
    description:
      "High-quality tiling services that bring color, texture, and character to any room with precision and care.",
    image: IServices4,
  },
  {
    title: "PAINTING",
    category: "PAINTING",
    description:
      "High-quality painting services that bring color, texture, and character to any room with precision and care.",
    image: IServices5,
  },
  {
    title: "COMPLETE BASEMENT",
    category: "COMPLETE BASEMENT",
    description: "Full-service basement remodeling, from waterproofing to finishing, creating comfortable and functional living space below ground.",
    image: IServices6,
  },
];


const Portfolio = () => {

  return (
    <div className="container mx-auto w-full lg:w-10/12 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">OUR SERVICES</h2>
      <p className="text-center text-gray-500 mb-10 max-w-6xl mx-auto">
        We offer a range of high-quality services tailored to meet your unique
        needs. Whether you're looking for expert consultation, end-to-end
        project execution, or ongoing support, our team is committed to
        delivering reliable, efficient, and innovative solutions that drive
        results.
      </p>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exterior Services</h1>
        <span className="flex items-center gap-2 cursor-pointer">
          SEE MORE <FaArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6">
        {services.map((service, index) => (
          <div key={index} className="shadow-lg border overflow-hidden">
            <img
              src={service.image}
              alt="Industry Service"
              className="w-full h-48 object-cover"
            />
            <div className="w-full h-[4px] bg-yellow-400"></div>
            <div className="bg-blue-900 text-white p-6">
              <h2 className="text-xl font-bold text-yellow-400">
                {service.title}
              </h2>
              <p className="mt-2 text-sm h-[54px]">{service.description}</p>
              <ServicesModel data={service} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Interior Services</h1>
        <span className="flex items-center gap-2 cursor-pointer">
          SEE MORE <FaArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6">
        {services2.map((service, index) => (
          <div key={index} className="shadow-lg border overflow-hidden">
            <img
              src={service.image}
              alt="Industry Service"
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

export default Portfolio;
