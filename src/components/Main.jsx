import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Slide from "./Slide";
import useFetch from "../hooks/useFetch";

const Main = () => {
  const { data } = useFetch(`/movie/popular`);
  const { data: series } = useFetch(`/tv/popular`);
  return (
    <div className="flex flex-col overflow-hidden flex-1  md:px-0 ">
      <div className="flex flex-col">
        <div
          className=" hero overflow-hidden relative h-[500px] w-full flex bg-center bg-cover bg-no-repeat rounded-2xl z-[-1]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(14, 13, 24, 1) 89.5%), url(https://4kwallpapers.com/images/wallpapers/doctor-strange-in-the-multiverse-of-madness-elizabeth-olsen-3840x2160-8222.jpg)`,
          }}
        >
          <div className="pb-14 pl-16 self-end ">
            <span className="border-[1px] border-gray-300/50 p-1 rounded-md text-gray-300 text-xs">
              PG-13
            </span>
            <h1 className="text-5xl font-bold text-gray-200 my-5">
              Doctor Strange in the <br />
              Multiverse of Madness
            </h1>
            <div className="flex text-gray-200 gap-6">
              <span className="backdrop-filter backdrop-blur-sm border-[1px] bg-gradient-to-r from-gray-400/30 border-gray-500 py-0.5 px-3 rounded-full">
                Fantasy
              </span>
              <span className="backdrop-filter backdrop-blur-sm border-[1px] bg-gradient-to-r from-gray-400/30 border-gray-500 py-0.5 px-3 rounded-full">
                Action
              </span>
              <span className="backdrop-filter backdrop-blur-sm border-[1px] bg-gradient-to-r from-gray-400/30 border-gray-500 py-0.5 px-3 rounded-full">
                Adventure
              </span>
            </div>
            <p className="w-1/2 text-gray-200 mt-3 text-sm">
              Doctor Strange, with the help of mystical allies both old and new,
              traverses the mind-bending and dangerous alternate realities of
              the Multiverse to confront a mysterious new adversary.
            </p>

            <button className=" cursor-pointer text-white px-8 py-3 bg-purple rounded-full mt-10 gap-4 flex items-center hover:bg-purple/50 duration-300">
              <PlayArrowIcon />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <Slide title={"Trending Movies"} data={data} vertical={true} />
      <Slide title={"Trending Tv Shows"} data={series} vertical={true} />
    </div>
  );
};

export default Main;
