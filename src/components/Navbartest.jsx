import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // import useLocation
import Logo from "../assets/znlogo.png";

const Navbartest = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation(); // get current path

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/services" },
    { name: "GALLERY", link: "/gallery" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="bg-white shadow-md w-full sticky top-0 z-50">
      <nav className="relative bg-white shadow w-full lg:w-10/12 mx-auto">
        <div className="container mx-auto px-6 lg:px-0 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 text-2xl font-semibold"
          >
            <img className="h-7" src={Logo} alt="Logo" /> Zruniversal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div className="flex gap-6 mr-6">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className={`font-semibold transition ${
                    location.pathname === item.link
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: "24px" }} />}
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>

          {/* Ant Design Drawer */}
          <Drawer
            title={
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Menu</span>
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => setIsDrawerOpen(false)}
                />
              </div>
            }
            placement="right"
            closeIcon={false}
            open={isDrawerOpen}
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className={`font-semibold transition ${
                    location.pathname === item.link
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbartest;
