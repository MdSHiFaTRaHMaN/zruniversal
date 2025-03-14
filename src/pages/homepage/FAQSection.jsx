import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import FaqImage from "../../assets/faq_main_photo.png";
import "antd/dist/reset.css";
import { FaChevronDown } from "react-icons/fa";

const { Panel } = Collapse;

const FAQSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={FaqImage}
          alt="Construction Worker"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* FAQ Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Have Some Questions?
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt
          libero voluptate
        </p>
        <Collapse
          accordion
          expandIcon={({ isActive }) => (
            <FaChevronDown  rotate={isActive ? 180 : 0} className="!text-white !rounded-none" />
          )}
          className="mt-4"
        >
          <Panel
            header={
              <span className="text-white">
                Eam aeterno nominavi id nisl magna
              </span>
            }
            key="1"
            className="bg-[#203B63] text-white font-medium"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, vivendum consequat id nam, ut
              tincidunt interesset mel. Est diam utinam facilis at. An vix inani
              recusabo. Pri ut probo quaerendum conclusionemque, cum discere
              placerat eu. Per ut malis aliquid dissentiunt, ne enim tempor
              concludaturque quo. Ad quod elit aliquid eos, no mea voluptua
              probatus philosophia. Atqui fierent vim eu, et facer detraxit
              similique sea, constituam contentiones an cum. Ad fuisset molestie
              his, his etiam oblique aliquid ne. Ad iusto utamur vel, qui zril
              feugiat omnesque at. Pri te saepe graecis oporteat, persius
              tacimates in per. Integre iuvaret accumsan ea vix, ei eos vide
              primis nominavi..
            </p>
          </Panel>
          <Panel
            header={
              <span className="text-white">
                Eam aeterno nominavi id nisl magna
              </span>
            }
            key="2"
            className="bg-[#203B63] text-white font-medium my-3"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, vivendum consequat id nam, ut
              tincidunt interesset mel. Est diam utinam facilis at. An vix inani
              recusabo. Pri ut probo quaerendum conclusionemque, cum discere
              placerat eu. Per ut malis aliquid dissentiunt, ne enim tempor
              concludaturque quo. Ad quod elit aliquid eos, no mea voluptua
              probatus philosophia. Atqui fierent vim eu, et facer detraxit
              similique sea, constituam contentiones an cum. Ad fuisset molestie
              his, his etiam oblique aliquid ne. Ad iusto utamur vel, qui zril
              feugiat omnesque at. Pri te saepe graecis oporteat, persius
              tacimates in per. Integre iuvaret accumsan ea vix, ei eos vide
              primis nominavi.
            </p>
          </Panel>
          <Panel
            header={
              <span className="text-white">
                Vis constituto complectitur an modo
              </span>
            }
            key="3"
            className="bg-[#203B63] text-white font-medium my-3"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, vivendum consequat id nam, ut
              tincidunt interesset mel. Est diam utinam facilis at. An vix inani
              recusabo. Pri ut probo quaerendum conclusionemque, cum discere
              placerat eu. Per ut malis aliquid dissentiunt, ne enim tempor
              concludaturque quo. Ad quod elit aliquid eos, no mea voluptua
              probatus philosophia. Atqui fierent vim eu, et facer detraxit
              similique sea, constituam contentiones an cum. Ad fuisset molestie
              his, his etiam oblique aliquid ne. Ad iusto utamur vel, qui zril
              feugiat omnesque at. Pri te saepe graecis oporteat, persius
              tacimates in per. Integre iuvaret accumsan ea vix, ei eos vide
              primis nominavi.
            </p>
          </Panel>
          <Panel
            header={
              <span className="text-white">
                Ancillae interpretaris ea has id amet
              </span>
            }
            key="4"
            className="bg-[#203B63] text-white font-medium"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, vivendum consequat id nam, ut
              tincidunt interesset mel. Est diam utinam facilis at. An vix inani
              recusabo. Pri ut probo quaerendum conclusionemque, cum discere
              placerat eu. Per ut malis aliquid dissentiunt, ne enim tempor
              concludaturque quo. Ad quod elit aliquid eos, no mea voluptua
              probatus philosophia. Atqui fierent vim eu, et facer detraxit
              similique sea, constituam contentiones an cum. Ad fuisset molestie
              his, his etiam oblique aliquid ne. Ad iusto utamur vel, qui zril
              feugiat omnesque at. Pri te saepe graecis oporteat, persius
              tacimates in per. Integre iuvaret accumsan ea vix, ei eos vide
              primis nominavi.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FAQSection;
