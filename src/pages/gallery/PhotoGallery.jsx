import React from "react";
import { Card } from "antd";
import "antd/dist/reset.css";
import Img1 from "../../assets/work/work1.jpeg";
import Img2 from "../../assets/work/work2.jpeg";
import Img3 from "../../assets/work/work3.jpeg";
import Img4 from "../../assets/work/work4.jpeg";
import Img5 from "../../assets/work/work5.jpeg";
import Img6 from "../../assets/work/work6.jpeg";

const photos = [
  { src: Img1, caption: "Photo Caption 1" },
  { src: Img2, caption: "Photo Caption 2" },
  { src: Img3, caption: "Photo Caption 3" },
  { src: Img4, caption: "Photo Caption 4" },
  { src: Img5, caption: "Caption Photo 5" },
  { src: Img6, caption: "Caption Photo 6" },
];

const PhotoGallery = () => {
  return (
    <div className="container w-full lg:w-10/12 mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">PHOTO GALLERY</h2>
      <p className="text-center text-gray-500 mt-2">
        Explore moments from our completed works — where quality meets precision
        in every detail.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-1 lg:px-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="w-full overflow-hidden bg-white rounded shadow-lg"
          >
            <img
              className="object-cover w-full h-56"
              src={photo.src}
              alt="avatar"
            />
            <div className="w-full h-1 bg-yellow-400"></div>
            <div className="py-5 text-center bg-[#203B63]">
              <a
                href="#"
                className="block text-xl font-bold text-white"
                tabindex="0"
                role="link"
              >
                {photo.caption}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
