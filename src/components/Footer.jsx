import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../assets/logo.png";

const Footer = () => {
  const menu = [
    {
      title: "The Basics",
      items: [
        { name: "About", url: "/" },
        { name: "Contact Us", url: "/" },
        { name: "Support Forums", url: "/" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { name: "Contribution", url: "/" },
        { name: "Add New Movie", url: "/" },
        { name: "Add New TV Show", url: "/" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Guidelines", url: "/" },
        { name: "Discussions", url: "/" },
        { name: "Leaderboard", url: "/" },
      ],
    },
  ];
  return (
    <>
      <div className="container mx-auto px-5 mt-32 ">
        <div className="text-white/80  flex gap-10 justify-between my-14">
          <div className="flex flex-col w-1/3 gap-5">
            <Link to="/">
              <div className="flex gap-2 items-center">
                <img src={logo} alt="" className="w-10" />
                <div className="text-2xl font-bold cursor-pointer">
                  Cine<span className="text-purple">Max</span>
                </div>
              </div>
            </Link>
            <span>
              CineMax is a movie streaming app that allows users to access a
              wide variety of films and TV shows on their devices.
            </span>
          </div>
          <div className="flex  w-full justify-around">
            {menu.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="text-lg font-bold">{item.title}</span>
                {item.items.map((i) => (
                  <ul key={i.name}>
                    <Link to={i.url}>
                      <li className="hover:text-purple duration-300">
                        {i.name}
                      </li>
                    </Link>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <span>Join Our Community 🚀</span>
            <div className="border-[1px] border-gray-600 min-w-[300px] px-5 py-3 relative mt-2 rounded-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none bg-blue"
              />
              <button className="absolute bg-purple p-[5px] top-[6px] rounded-full right-2">
                <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] py-5 border-gray-600 w-full text-gray-600 text-sm">
          <span>Copyright © 2021 UI8 LLC. All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
