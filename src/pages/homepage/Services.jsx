import Service1 from "../../assets/workservices/services1.png";
import Service2 from "../../assets/workservices/services2.jpg";
import Service3 from "../../assets/workservices/services3.jpg";
import Service4 from "../../assets/workservices/services4.png";
import Service5 from "../../assets/workservices/services5.png";
import Service6 from "../../assets/workservices/services6.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ServicesModel from "../../components/ServicesModel";

const services = [
  {
    title: "Violation Removal",
    description:
      "We provide expert assistance in identifying, assessing, and removing regulatory or legal violations to ensure compliance and reduce potential liabilities.",
    image: Service1,
  },
  {
    title: "Engineering & Design",
    description:
      "Our team delivers innovative engineering solutions and customized design services tailored to meet specific industry standards and client requirements.",
    image: Service2,
  },
  {
    title: "Industry Training",
    description:
      "Empower your workforce with practical, hands-on training programs designed to enhance skills, improve safety, and boost operational efficiency.",
    image: Service3,
  },
  {
    title: "Program Management",
    description:
      "We offer end-to-end program management services, ensuring seamless coordination, resource allocation, and timely delivery of complex projects.",
    image: Service4,
  },
  {
    title: "Analytics & Research",
    description:
      "Leverage data-driven insights with our advanced analytics and research services to make informed decisions and uncover hidden opportunities.",
    image: Service5,
  },
  {
    title: "Health and Safety",
    description:
      "Protect your team with our comprehensive health and safety solutions, designed to minimize risk, comply with regulations, and create safer workplaces.",
    image: Service6,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto w-full lg:w-10/12 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-2">OUR SERVICES</h2>
      <p className="text-center text-gray-500 mb-10 max-w-5xl mx-auto">
        We offer a range of high-quality services tailored to meet your unique
        needs. Whether you're looking for expert consultation, end-to-end
        project execution, or ongoing support, our team is committed to
        delivering reliable, efficient, and innovative solutions that drive
        results.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="shadow-lg border overflow-hidden">
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
              <p className="mt-2 text-sm">{service.description}</p>
              {/* <button className="mt-4 flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-500">
                Read More <MdKeyboardDoubleArrowRight />
              </button> */}
              <ServicesModel />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
