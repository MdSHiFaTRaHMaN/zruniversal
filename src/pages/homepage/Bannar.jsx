import { Carousel } from "antd";
import { useRef } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannarImg from "../../assets/bannar999.jpeg";
import BannarImg2 from "../../assets/bannar222.jpeg";

const Bannar = () => {
  const carouselRef = useRef();

  return (
    <div className="relative">
      <Carousel ref={carouselRef} autoplay dots className="custom-carousel">
        {/* Slide 1 */}
        <div>
          <div className="relative w-full h-[60vh] md:h-[80vh]">
            <img src={BannarImg} alt="Slide 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4 md:px-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">HELPING BUILD A BETTER FUTURE</h1>
              <p className="text-sm md:text-lg mt-2 max-w-2xl">
                We build more than structures — we build dreams, communities, and a better tomorrow.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="bg-[#203B63] text-white px-6 py-2 md:py-3 rounded font-semibold">CONTACT</button>
                </Link>
                <button className="bg-[#F8BE2E] text-black px-6 py-2 md:py-3 rounded font-semibold">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="relative w-full h-[60vh] md:h-[80vh]">
            <img src={BannarImg2} alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4 md:px-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">BUILD WITH CONFIDENCE</h1>
              <p className="text-sm md:text-lg mt-2 max-w-2xl">
                Reliable construction, trusted quality — empowering you to build with confidence.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="bg-[#203B63] text-white px-6 py-2 md:py-3 rounded font-semibold">CONTACT</button>
                </Link>
                <button className="bg-[#F8BE2E] text-black px-6 py-2 md:py-3 rounded font-semibold">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Fixed Custom Arrows */}
      <button
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        onClick={() => carouselRef.current?.prev()}
      >
        <FaCaretLeft className="text-white text-2xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        onClick={() => carouselRef.current?.next()}
      >
        <FaCaretRight className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Bannar;
