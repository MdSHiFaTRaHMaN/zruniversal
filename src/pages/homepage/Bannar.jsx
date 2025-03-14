import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BannarImg from "../../assets/bannar1.jpg";
import BannarImg2 from "../../assets/bannar2.jpg";
import "./Bannar.css"; // Import CSS for custom styling
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Bannar = () => {
  return (
    <div className="relative">
      <Carousel autoplay arrows className="custom-carousel">
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={BannarImg}
            alt="Slide"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-4xl font-bold">HELPING BUILD A BETTER FUTURE</h1>
            <p className="text-lg mt-2 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              libero voluptate, veritatis esse dolorem soluta.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-[#203B63] text-white px-6 py-3 rounded font-semibold">
                CONTACT
              </button>
              <button className="bg-[#F8BE2E] text-black px-6 py-3 rounded font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={BannarImg2}
            alt="Slide"
            className="w-full h-[600px] bg-cover object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-4xl font-bold">BUILD WITH CONFIDENCE</h1>
            <p className="text-lg mt-2 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              libero voluptate, veritatis esse dolorem soluta.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-[#203B63] text-white px-6 py-3 rounded font-semibold">
                CONTACT
              </button>
              <button className="bg-[#F8BE2E] text-black px-6 py-3 rounded font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Custom Arrows */}
      <button className="custom-arrow left-arrow" onClick={() => document.querySelector(".custom-carousel .slick-prev")?.click()}>
        <FaCaretLeft className="text-white text-xl" />
      </button>
      <button className="custom-arrow right-arrow" onClick={() => document.querySelector(".custom-carousel .slick-next")?.click()}>
        <FaCaretRight className="text-white text-xl" />
      </button>
    </div>
  );
};

export default Bannar;
