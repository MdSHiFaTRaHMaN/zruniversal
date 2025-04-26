import {
  FaUsers,
  FaChartLine,
  FaMountain,
  FaRunning,
  FaClock,
} from "react-icons/fa";
import WorkerImage from "../../assets/why_choose_item_bg.jpg";
import BgImage from "../../assets/why_choose_main_photo.jpg";
import Img from "../../assets/why2.svg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUsers className="text-black text-3xl" />,
      title: "Free Violation Lookup & Consultation",
      description:
        "Get expert insights and a detailed review of your property violations at no cost — our team guides you every step of the way.",
    },
    {
      icon: <FaChartLine className="text-black text-3xl" />,
      title: "Licensed Contractors & Engineers",
      description:
        "Work with certified professionals who bring years of experience and industry knowledge to ensure your project is safe, compliant, and high-quality.",
    },
    {
      icon: <FaMountain className="text-black text-3xl" />,
      title: "Permit Filing, Correction, and Legal Representation",
      description:
        "We handle all your DOB permit needs — from new filings to correcting past errors — and provide legal support for full peace of mind.",
    },
    {
      icon: <FaRunning className="text-black text-3xl" />,
      title: "OATH Hearing Support",
      description:
        "Facing a hearing? We offer complete support, from document preparation to expert representation, ensuring your case is presented professionally.",
    },
    {
      icon: <FaClock className="text-black text-3xl" />, // Import FaClock from react-icons/fa
      title: "Fast Turnaround Time",
      description:
        "Time matters. Our streamlined process ensures you get results quickly — without compromising quality or compliance.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-2">WHY CHOOSE US</h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        We offer reliable solutions, expert guidance, and dedicated support to
        help you navigate every step of your construction and compliance
        journey.
      </p>

      <div className="grid md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="relative hidden md:block lg:block">
          <img src={Img} alt="Worker" className="w-full bg-[#8597BA] h-[622px]" />
        </div>

        {/* Right Features Section */}
        <div className="relative p-[24px]">
          {/* Darker Background Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-80"
            style={{
              backgroundImage: `url(${BgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Content with Higher Z-Index */}
          <div className="relative z-20 text-white">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6">
                <div>{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-900">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
