/*import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Create Template", src: "Chart_fill" },
    { title: "Category", src: "Chat" },
    { title: "See Blogs", src: "User", gap: true },
    { title: "Setting", src: "Setting" },
  ];

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
          <h1 className="text-2xl font-semibold ">Blogs Template</h1>
        </div>
      </div>
    </div>
  );
};
export default App;
*/


import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Create Template", src: "Chart_fill" },
    { title: "Category", src: "Chat" },
    { title: "See Blogs", src: "User", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="px-4 sm:px-10 py-5 flex justify-between bg-slate-600">
        <h1 className="text-lg sm:text-2xl font-bold text-white">Blogs</h1>
        <button className="text-xl sm:text-4xl text-white">
          <BiUserCircle />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            open ? "w-72" : "w-20"
          } bg-dark-purple h-full p-5 pt-8 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
              alt="Logo"
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
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                } ${index === 0 && "bg-light-white"}`}
              >
                <img
                  src={`./src/assets/${Menu.src}.png`}
                  alt={Menu.title}
                  className="w-6 h-6"
                />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-7">
          <h1 className="text-2xl font-semibold">Home Page</h1>
        </div>
      </div>
    </div>
  );
};

export default App;

