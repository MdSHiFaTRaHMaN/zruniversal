import { useState } from "react";
import Service1 from "../../assets/ser1.jpg";
import Service2 from "../../assets/ser2.jpg";
import Service3 from "../../assets/ser3.jpg";
import Service4 from "../../assets/ser4.jpg";
import Service5 from "../../assets/ser5.jpg";
import Service6 from "../../assets/ser6.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const services = [
  {
    title: "Corporate Work 1",
    category: "CORPORATE",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service1,
  },
  {
    title: "Engineering Work 2",
    category: "ENGINEERING",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service2,
  },
  {
    title: "Corporate Work 2",
    category: "CORPORATE",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service3,
  },
  {
    title: "Engineering Work 1",
    category: "ENGINEERING",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service4,
  },
  {
    title: "Business Work 1",
    category: "BUSINESS",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service5,
  },
  {
    title: "Consulting Work 1",
    category: "CONSULTING",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service6,
  },
];

const tab = ["ALL", "CORPORATE", "BUSINESS", "ENGINEERING", "CONSULTING"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredServices =
    selectedCategory === "ALL"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="container mx-auto w-full lg:w-10/12 py-12">
      <div className="flex justify-center gap-2 my-4">
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
          <div
            key={index}
            className="max-w-sm shadow-lg border overflow-hidden"
          >
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
