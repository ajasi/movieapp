import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import RightSideBar from "../components/RightSideBar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Layout>
      <div className="flex ">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <Main />
        <RightSideBar />
      </div>
    </Layout>
  );
};

export default Home;
