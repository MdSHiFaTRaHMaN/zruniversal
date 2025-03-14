import { Menu } from "antd";
import { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="bg-white shadow-md">
      <div className=" w-full lg:w-10/12 mx-auto py-2.5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <HomeOutlined className="text-yellow-500 text-3xl" />
          <h1 className="text-2xl font-bold text-blue-900">Znuniversal</h1>
        </div>

        {/* Desktop Navigation */}
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="hidden md:flex border-none text-blue-900 font-semibold"
        >
          <Menu.Item key="home">
            <Link to="/">HOME</Link>
          </Menu.Item>
          <Menu.Item key="service">SERVICE</Menu.Item>
          <Menu.Item key="portfolio">PORTFOLIO</Menu.Item>
          <Menu.Item key="contact">CONTACT</Menu.Item>
        </Menu>

        {/* Mobile Menu (Hidden on larger screens) */}
        <div className="md:hidden">
          <Menu
            mode="vertical"
            className="absolute top-16 left-0 w-full bg-white shadow-lg p-4"
          >
            <Menu.Item key="home">
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="service">SERVICE</Menu.Item>
            <Menu.Item key="portfolio">PORTFOLIO</Menu.Item>
            <Menu.Item key="contact">CONTACT</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
