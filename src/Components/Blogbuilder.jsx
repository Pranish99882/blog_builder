import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import Templates from "./Templates"; // Import the BlogTemplates component
import Category from "./Category";
import Subcategory from "./Subcategory";

const Blogbuilder = () => {
  const [open, setOpen] = useState(true);
  const [showTemplates, setShowTemplates] = useState(false); // State to control showing templates
  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);

  const Menus = [
    { title: "Create Template", src: "Chart_fill" },
    { title: "Create Category", src: "Chat" },
    { title: "Create Sub-Category", src: "User" },
    { title: "Blogs", src: "" },
  ];

  const handleMenuClick = (title) => {
    if (title === "Create Template") {
      setShowTemplates(true); // Show templates when "Create Template" is clicked
    } else {
      setShowTemplates(false); // Hide templates for other menu items
    }

    if (title === "Create Category") {
      setShowCategory(true); // Show templates when "Create Template" is clicked
    } else {
      setShowCategory(false); // Hide templates for other menu items
    }

    if (title === "Create Sub-Category") {
      setShowSubCategory(true); // Show templates when "Create Template" is clicked
    } else {
      setShowSubCategory(false); // Hide templates for other menu items
    }


  };

  
  return (
    <div className="flex flex-col">
      <div className="px-10 py-5 flex justify-between  bg-slate-600 ">
        <h1 className="text-2xl font-bold text-white">Blogs</h1>
        <button className="text-4xl text-white"><BiUserCircle /></button>
      </div>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              BLOG BUILDER
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
                onClick={() => handleMenuClick(Menu.title)} // Handle menu item click
               
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          {showTemplates ? <Templates /> : <h1 className="text-2xl font-semibold ">Home Page</h1>}
          {showCategory ? <Category /> : <h1 className="text-2xl font-semibold ">Home Page</h1>}
          {showSubCategory ? <Subcategory /> : <h1 className="text-2xl font-semibold ">Home Page</h1>}
        </div>
      </div>
    </div>
  );
};

export default Blogbuilder;
