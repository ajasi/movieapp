import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MiniCard from "./MiniCard";

const RightSideBar = () => {
  const { data } = useFetch(`/movie/top_rated`);
  const { data: series } = useFetch(`/tv/top_rated`);

  return (
    <div className="px-4 hidden xl:flex flex-col">
      <div className=" flex flex-col gap-3">
        <span className="font-bold text-xl text-white2">Top Rated Movies</span>
        {data?.results?.slice(0, 3).map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.title ? `movie` : `tv`}/${item.id}`}
          >
            <MiniCard data={item} />
          </Link>
        ))}

        <Link
          to={`/list/discover/movie`}
          className="text-purple border-purple border-[1px] py-4 rounded-full font-bold my-4 hover:bg-purple hover:text-white duration-300 text-center"
        >
          See All
        </Link>
      </div>
      <div className=" flex flex-col gap-3">
        <span className="font-bold text-xl text-white2">Top Rated Series</span>
        {series?.results?.slice(0, 3).map((item) => (
          <Link
            key={item.id}
            to={`/details/${item?.title ? `movie` : `tv`}/${item?.id}`}
          >
            <MiniCard data={item} />
          </Link>
        ))}

        <Link
          to={`/list/discover/tv`}
          className="text-purple border-purple border-[1px] py-4 rounded-full font-bold my-4 hover:bg-purple hover:text-white duration-300 text-center"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default RightSideBar;
