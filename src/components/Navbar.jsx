import { Menu } from "antd";
import { useState } from "react";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
    setMobileOpen(false); // Close mobile menu on item click
  };

  return (
    <div className="bg-white shadow-md w-full">
      <div className="w-full lg:w-10/12 mx-auto py-3 flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <HomeOutlined className="text-yellow-500 text-2xl" />
            <h1 className="text-2xl font-bold text-blue-900 mt-2">
              Znuniversal
            </h1>
          </div>
        </Link>

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
          <Menu.Item key="service">
            <Link to="/services">SERVICE</Link>
          </Menu.Item>
          <Menu.Item key="portfolio">
            <Link to="/portfolio">PORTFOLIO</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">CONTACT</Link>
          </Menu.Item>
        </Menu>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuOutlined className="text-2xl text-blue-900" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <Menu
          onClick={handleClick}
          mode="vertical"
          className="md:hidden bg-white shadow-lg w-full text-center"
        >
          <Menu.Item key="home">
            <Link to="/">HOME</Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link to="/services">SERVICE</Link>
          </Menu.Item>
          <Menu.Item key="portfolio">
            <Link to="/portfolio">PORTFOLIO</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">CONTACT</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
