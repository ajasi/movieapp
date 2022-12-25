import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

const menu = [
  {
    id: 1,
    name: "Menu",
    items: [
      { title: "Browse", icon: <ExploreOutlinedIcon />, url: `/` },
      {
        title: "Top Rated",
        icon: <StarBorderRoundedIcon />,
        url: `/list/discover/movie`,
      },
      {
        title: "Coming Soon",
        icon: <CalendarMonthRoundedIcon />,
        url: `list/movie/upcoming`,
      },
    ],
  },
  {
    id: 2,
    name: "Social",
    items: [
      { title: "Friends", icon: <PersonOutlineOutlinedIcon />, url: `/` },
      { title: "Parties", icon: <Diversity3OutlinedIcon />, url: `/` },
    ],
  },
  {
    id: 3,
    name: "Settings",
    items: [
      { title: "Settings", icon: <SettingsOutlinedIcon />, url: `/` },
      { title: "Logout", icon: <LogoutOutlinedIcon />, url: `/` },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="min-w-[230px] sticky top-0 ">
      <div className="pt-1">
        {menu.map((item) => (
          <div key={item.id} className="mt-10">
            <span className="ml-9 font-bold text-gray-200">{item.name}</span>
            <ul className="flex flex-col gap-3 mt-3">
              {item.items.map((link) => (
                <Link key={link.title} to={`${link.url}`}>
                  <li className="duration-300 text-white2 hover:text-purple items-center flex gap-3 pl-9 py-2 cursor-pointer border-l-4 border-purple hover:bg-purple/5">
                    {link.icon}
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
