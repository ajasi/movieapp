import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";

const MiniCard = ({ data }) => {
  const img = process.env.REACT_APP_IMG_URL;
  return (
    <div className="flex gap-4 items-center hover:bg-gradient-to-t from-purple/5 p-2 rounded-xl cursor-pointer">
      <div className="bg-gray-500 w-28 h-40 rounded-xl overflow-hidden bg-cover bg-center">
        <img src={img + `/w200` + data?.poster_path} alt="" />
      </div>
      <div className="text-white flex flex-col gap-3">
        <span className="border-[1px] border-gray-500 p-1 rounded-md text-gray-300 text-xs w-fit">
          PG-13
        </span>
        <span className="font-bold">
          {data?.name?.slice(0, 20) || data?.title?.slice(0, 20)}
        </span>

        <span className="text-xs text-gray-400 flex items-center">
          <LocalMoviesRoundedIcon fontSize="small" />
          Action, Drama, Thriler
        </span>

        <div className=" flex items-center">
          <StarRoundedIcon className="text-yellow-500" />
          <span className="font-bold">{data?.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
