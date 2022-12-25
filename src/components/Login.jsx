import React, { useState } from "react";
import Modal from "./Modal";
import CloseIcon from "@mui/icons-material/Close";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = ({ open, setOpen, signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[360px] rounded-lg px-6 pt-10 justify-center pb-4 flex flex-col bg-blue ">
          <div className=" absolute md:scale-100 top-0  w-14 h-14 bg-purple blur-[50px] " />

          <div className=" absolute md:scale-100 top-0 left-0  w-20 h-20 bg-cyan-500 blur-[50px] " />
          <div className="z-10">
            <button
              className="fixed right-5 top-5 text-white/70 hover:text-purple duration-300"
              onClick={() => setOpen(!open)}
            >
              <CloseIcon />
            </button>
            <div className="text-white/80 text-xl mb-4 text-center">
              Welcome Back! Login to your account
            </div>
            <form onSubmit={signIn}>
              <div className="flex flex-col">
                <label for="email" className="text-white/60 font-medium ">
                  E-mail
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 text-white px-4 py-2 w-full rounded-lg outline-none caret-white"
                  type="email"
                  name="email"
                  placeholder="Your e-mail adress"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label for="password" className="text-white/60 font-medium ">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 text-white px-4 py-2 w-full rounded-lg outline-none caret-white"
                  type="password"
                  name="password"
                  placeholder="Your password"
                />
              </div>
              <button className="bg-purple hover:bg-purple/80 duration-300 w-full py-2 rounded-lg mt-7 mb-3 text-white">
                Login
              </button>
              <span className="text-white/50 text-sm flex gap-1">
                You don't have an account?
                <span
                  onClick={() => {
                    setOpen(!open);
                    signup(true);
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Signup
                </span>
              </span>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
