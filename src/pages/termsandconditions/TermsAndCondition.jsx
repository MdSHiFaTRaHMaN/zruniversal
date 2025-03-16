import React from "react";
import Background from "../../assets/banner_service.jpg";
import TermsAbout from "./TermsAbout";

const TermsAndCondition = () => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-[14rem]"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              TERM & CONDITIONS
            </h1>
          </div>
        </div>
      </div>
      <TermsAbout />
    </div>
  );
};

export default TermsAndCondition;
