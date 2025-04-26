import { Modal } from "antd";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ServicesModel = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={showModal}
        className="mt-4 flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-500"
      >
        Read More <MdKeyboardDoubleArrowRight />
      </button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <img
          src={data.image}
          className="h-[300px] rounded-t-lg w-full object-cover"
          alt=""
        />
        <div className="w-full h-[4px] bg-yellow-400"></div>
        <div className="bg-blue-900 text-white p-6">
          <h2 className="text-xl font-bold text-yellow-400">{data.title}</h2>
          <p className="mt-2 text-sm">{data.description}</p>
          <p className="my-2 text-sm">
            Construction work generally involves preparing and cleaning the
            construction site, loading and unloading materials, assisting
            skilled tradespeople, and performing basic tasks like digging or
            mixing concrete. Construction workers also follow building plans,
            operate machinery, and ensure safety on the job site.{" "}
          </p>
          <h2 className="text-lg font-bold mt-6">Site Preparation:</h2>
          <p className="text-sm">
            This includes clearing debris, removing hazards, and preparing the
            site for heavy equipment or building structures.
          </p>
          <h2 className="text-lg font-bold mt-6">Material Handling:</h2>
          <p className="text-sm">
            Loading and unloading building materials, transporting them to the
            construction site, and storing them properly.
          </p>
          <h2 className="text-lg font-bold mt-6">Assisting Tradespeople:</h2>
          <p className="text-sm">
            Providing support to carpenters, electricians, plumbers, and other
            skilled workers.
          </p>
          <h2 className="text-lg font-bold mt-6">Basic Construction Tasks:</h2>
          <p className="text-sm">
            Digging trenches, mixing concrete, erecting scaffolding, and
            performing other basic tasks.
          </p>
          <h2 className="text-lg font-bold mt-6">Operating Equipment:</h2>
          <p className="text-sm">
            Depending on their skills and the project, they may operate heavy
            machinery like bulldozers, cranes, or jackhammers.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ServicesModel;
