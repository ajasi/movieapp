import React, { useState } from "react";
import Modal from "./Modal";
import CloseIcon from "@mui/icons-material/Close";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Signup = ({ open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {}
    );
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[400px] rounded-lg px-6 pt-10 justify-center pb-4 flex flex-col bg-blue ">
          <div className=" absolute md:scale-100 top-0  w-14 h-14 bg-purple blur-[50px] " />

          <div className=" absolute md:scale-100 top-0 left-0  w-20 h-20 bg-cyan-500 blur-[50px] " />
          <div className="z-10">
            <button
              className="fixed right-5 top-5 text-white/70 hover:text-purple duration-300"
              onClick={() => setOpen(!open)}
            >
              <CloseIcon />
            </button>
            <div className="text-white/80 text-xl mb-8 text-center">
              Create an Account
            </div>
            <form onSubmit={signUp}>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <input
                    className="bg-white/5 text-white px-4 py-2 w-full rounded-lg outline-none caret-white"
                    type="text"
                    name="name"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col ">
                  <input
                    className="bg-white/5 text-white px-4 py-2 w-full rounded-lg outline-none caret-white"
                    type="text"
                    name="passlastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 text-white px-4 py-2 w-full rounded-lg outline-none caret-white"
                  type="email"
                  name="email"
                  placeholder="Your e-mail adress"
                />
              </div>
              <div className="flex flex-col mt-3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 text-white px-4 py-2 w-full rounded-lg outline-none caret-white"
                  type="password"
                  name="password"
                  placeholder="Your password"
                />
              </div>

              <button className="bg-purple hover:bg-purple/80 duration-300 w-full py-2 rounded-lg my-7 text-white">
                Signup
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
