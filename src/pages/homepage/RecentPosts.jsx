import React from "react";
import { Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Img1 from "../../assets/ser1.jpg";
import Img2 from "../../assets/ser2.jpg";
import Img3 from "../../assets/ser3.jpg";
const posts = [
  {
    id: 1,
    image: Img1,
    title: "Omnes ornatus qui et, te aeterno discere ocurreret",
    date: "13 Dec, 2021",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens expetenda id sit, at usu eius eligendi singulis.",
  },
  {
    id: 2,
    image: Img2,
    title: "Ad qui quem reprimique, quo possit detracto",
    date: "13 Dec, 2021",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens expetenda id sit, at usu eius eligendi singulis.",
  },
  {
    id: 3,
    image: Img3,
    title: "Tollit cetero cu usu, etiam evertitur id nec",
    date: "13 Dec, 2021",
    description:
      "Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae argumentum has. Latine propriae quo no, unum ridens expetenda id sit, at usu eius eligendi singulis.",
  },
];

const RecentPosts = () => {
  return (
    <div className="container mx-auto w-full lg:w-10/12 py-10">
      <h2 className="text-center text-2xl font-bold">RECENT POSTS</h2>
      <p className="text-center text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero voluptate
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="shadow-lg rounded-lg overflow-hidden"
            cover={<img src={post.image} alt={post.title} className="h-60 w-full object-cover" />}
          >
            <div className="bg-yellow-500 text-white px-3 py-1 inline-block text-sm font-semibold mb-3">
              On: {post.date}
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
              Read More <ArrowRightOutlined />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
