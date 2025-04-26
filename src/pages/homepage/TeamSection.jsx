import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team1 from "../../assets/profile.png";

const teamMembers = [
  {
    name: "Robert Smith",
    role: "Manager",
    image: Team1,
  },
  {
    name: "John Henderson",
    role: "Worker",
    image: Team1,
  },
  {
    name: "Patrick Joe",
    role: "Chairman",
    image: Team1,
  },
  {
    name: "Brent Grundy",
    role: "Worker",
    image: Team1,
  },
  {
    name: "Steve Adams",
    role: "Engineer",
    image: Team1,
  },
  {
    name: "David Miller",
    role: "Supervisor",
    image: Team1,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TeamSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto text-center py-4">
      <h2 className="text-3xl font-bold text-gray-800">EXPERIENCED TEAM</h2>
      <p className="text-gray-500 mt-2">
        Our skilled professionals bring years of hands-on experience to every
        project, ensuring quality, safety, and on-time delivery.
      </p>

      <div className="mt-6">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg overflow-hidden text-center mx-2"
            >
              <div className="w-full h-h-56">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-blue-900 text-white py-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TeamSection;
