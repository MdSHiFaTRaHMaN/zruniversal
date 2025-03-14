import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Background from "../../assets/testimonial_main_photo.jpg";
import { BsQuote } from "react-icons/bs";
import Profile from "../../assets/profile.jpg";

const testimonials = [
  {
    name: "Dadiv Smith",
    position: "CEO, SS Multimedia",
    image: Profile,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.",
  },
  {
    name: "Stefen Carman",
    position: "Chairman, GH Group",
    image: Profile,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.",
  },
  {
    name: "Gary Brent",
    position: "CFO, XYZ IT Solution",
    image: Profile,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut.",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const TestimonialSection = () => {
  return (
    <div
      className="bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${Background})` }}

    > 
    <div className="bg-gray-900/40 py-7">
      <h2 className="text-3xl font-bold text-white">WHAT OUR CLIENTS SAY</h2>
      <p className="text-white mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero
        voluptate
      </p>
      <div className="max-w-6xl mx-auto mt-8 ">
        <Carousel
          responsive={responsive}
          infinite
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center -mt-16">
                  <img
                    className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
                    alt="Testimonial avatar"
                    src={testimonial.image}
                  />
                </div>

                <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
                  {testimonial.position}
                </h2>

                <div className="p-1 text-gray-600 text-left">
                  <BsQuote className="text-2xl text-yellow-400" />
                  <p className="mt-2 text-sm font-semibold">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
