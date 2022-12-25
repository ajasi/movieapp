import React, { useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../assets/logo.png";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Signup from "./Signup";

const menu = [
  { id: 1, title: "Movies", url: `/list/discover/movie` },
  { id: 2, title: "Series", url: `/list/discover/tv` },
  { id: 3, title: "Kids", url: `/list/discover/movie` },
  { id: 4, title: "Genres", url: `/list/discover/movie` },
  { id: 5, title: "More", url: `/list/discover/movie` },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  return (
    <nav className="w-full bg-blue/70 backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="  flex justify-between items-center  mx-10 py-4 text-white">
        <div className="flex items-center gap-24">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="" className="w-10" />
              <div className="text-2xl font-bold cursor-pointer">
                Cine<span className="text-purple">Max</span>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex">
            <ul className="flex gap-10">
              {menu.map((item) => (
                <Link key={item.title} to={`${item.url}`}>
                  <li
                    className="duration-300 cursor-pointer hover:text-purple"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex sm:hidden cursor-pointer">
          <MenuIcon />
        </div>

        <div className=" gap-9 items-center hidden sm:flex z-10">
          <Search />

          <button className="text-white px-6 py-2 bg-purple rounded-full  hover:bg-purple/50 duration-300">
            Subscribe
          </button>
          <div className="relative cursor-pointer ">
            <NotificationsNoneOutlinedIcon />
            <span className="absolute bg-red-400 w-4 h-4 p-1 rounded-full text-xs top-0 items-center justify-center flex right-[-7px] font-bold">
              2
            </span>
          </div>

          <div
            onClick={() => setOpen(true)}
            className="rounded-full h-8 w-8 bg-black overflow-hidden cursor-pointer"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
          </div>
          {/*         
            <div
              onClick={() => setLoginModal(true)}
              className="  bg-white/10 rounded-full flex items-center p-2 cursor-pointer hover:bg-purple hover:border-purple  duration-300"
            >
              <PersonOutlineOutlinedIcon />
            </div> */}
        </div>
      </div>
      {open && <UserProfile open={open} setOpen={setOpen} />}
      {loginModal && (
        <Login
          open={loginModal}
          setOpen={setLoginModal}
          signup={setSignupModal}
        />
      )}
      {signupModal && <Signup open={signupModal} setOpen={setSignupModal} />}
    </nav>
  );
};

export default Header;
