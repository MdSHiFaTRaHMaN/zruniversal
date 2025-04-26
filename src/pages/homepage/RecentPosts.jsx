import React from "react";
import { Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Img1 from "../../assets/resentwork1.jpg";
import Img2 from "../../assets/resentwork2.jpg";
import Img3 from "../../assets/recentwort3.jpg";
const posts = [
  {
    id: 1,
    image: Img1,
    title: "Precision & Quality You Can Trust",
    date: "13 Dec, 2021",
    description:
      "From foundation to finish, the team delivered exceptional workmanship. The site was well-organized, deadlines were met, and the final result exceeded expectations. Highly recommended for any major construction project!",
  },
  {
    id: 2,
    image: Img2,
    title: "Outstanding Project Execution",
    date: "13 Dec, 2021",
    description:
      "Their professionalism on site was impressive. Every phase was carefully managed with attention to detail. The crew maintained safety standards and communication was consistent throughout the project.",
  },
  {
    id: 3,
    image: Img3,
    title: "Reliable and Skilled Construction Team",
    date: "13 Dec, 2021",
    description:
      "A top-tier experience from start to finish. They transformed the blueprint into a beautifully constructed reality while staying on budget. Their craftsmanship and integrity are truly commendable.",
  },
];

const RecentPosts = () => {
  return (
    <div className="container mx-auto w-full lg:w-10/12 py-10">
      <h2 className="text-center text-2xl font-bold">RECENT POSTS</h2>
      <p className="text-center text-gray-600 mb-6">
        Stay updated with our latest insights, news, and articles. Explore fresh
        content crafted to inform, inspire, and keep you in the loop with
        current trends and topics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="shadow-lg rounded-lg overflow-hidden"
            cover={
              <img
                src={post.image}
                alt={post.title}
                className="h-60 w-full object-cover"
              />
            }
          >
            <div className="bg-yellow-500 text-white px-3 py-1 inline-block text-sm font-semibold mb-3">
              On: {post.date}
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {post.title}
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-3">{post.description}</p>
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
