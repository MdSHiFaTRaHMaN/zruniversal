import Service1 from "../../assets/ser1.jpg";
import Service2 from "../../assets/ser2.jpg";
import Service3 from "../../assets/ser3.jpg";
import Service4 from "../../assets/ser4.jpg";
import Service5 from "../../assets/ser5.jpg";
import Service6 from "../../assets/ser6.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const services = [
  {
    title: "Engineering & Design",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service1,
  },
  {
    title: "Industry Training",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service2,
  },
  {
    title: "Digital Enterprise",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service3,
  },
  {
    title: "Program Management",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service4,
  },
  {
    title: "Analytics & Research",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service5,
  },
  {
    title: "Health and Safety",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens.",
    image: Service6,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto w-full lg:w-10/12 py-12">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className=" shadow-lg border overflow-hidden"
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt="Industry Training"
              className="w-full h-48 object-cover"
            />
            <div className="w-full h-[4px] bg-yellow-400"></div>
            {/* Content Section */}
            <div className="bg-[#203B63] text-white p-6">
              <h2 className="text-xl font-bold text-yellow-400">
                {service.title}
              </h2>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                copiosae argumentum has. Latine propriae quo no, unum ridens.
              </p>
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
