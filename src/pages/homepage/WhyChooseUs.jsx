import { FaUsers, FaChartLine, FaMountain, FaRunning } from "react-icons/fa";
import WorkerImage from "../../assets/why_choose_item_bg.jpg";
import BgImage from "../../assets/why_choose_main_photo.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUsers className="text-yellow-400 text-3xl" />, // React Icons
      title: "Brute altera causae ne sed cum no",
      description:
        "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no.",
    },
    {
      icon: <FaChartLine className="text-yellow-400 text-3xl" />, // React Icons
      title: "Liber utroque vim an, ne his brute",
      description:
        "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no.",
    },
    {
      icon: <FaMountain className="text-yellow-400 text-3xl" />, // React Icons
      title: "Vix tale noluisse voluptua ad ne",
      description:
        "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no.",
    },
    {
      icon: <FaRunning className="text-yellow-400 text-3xl" />, // React Icons
      title: "Mei ut errem legimus, periculis eos",
      description:
        "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-2">WHY CHOOSE US</h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero
        voluptate
      </p>

      <div className="grid md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="relative">
          <img src={WorkerImage} alt="Worker" className="w-full" />
        </div>

        {/* Right Features Section */}
        <div className="relative p-[53.5px]">
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
                  <h3 className="text-xl font-semibold text-yellow-400">
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
