import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team1 from "../../assets/team1.jpg";
import Team2 from "../../assets/team2.jpg";
import Team3 from "../../assets/team3.jpg";

const teamMembers = [
  {
    name: "Robert Smith",
    role: "Manager",
    image: Team1,
  },
  {
    name: "John Henderson",
    role: "Worker",
    image: Team2,
  },
  {
    name: "Patrick Joe",
    role: "Chairman",
    image: Team3,
  },
  {
    name: "Brent Grundy",
    role: "Worker",
    image: Team2,
  },
  {
    name: "Steve Adams",
    role: "Engineer",
    image: Team1,
  },
  {
    name: "David Miller",
    role: "Supervisor",
    image: Team3,
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
    <div className="w-full lg:w-10/12 mx-auto text-center py-10">
      <h2 className="text-3xl font-bold text-gray-800">EXPERIENCED TEAM</h2>
      <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="mt-6">
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {teamMembers.map((member, index) => (
            <div key={index} className="border shadow-lg rounded-lg overflow-hidden text-center mx-2">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
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
