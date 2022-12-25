import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Link } from "react-router-dom";

const img = process.env.REACT_APP_IMG_URL;

const Card = ({ data }) => {
  return (
    <div className="px-1">
      <div
        className="text-white bg-white/5 w-full sm:max-w-[300px]  h-48 min-w-[230px] flex items-end justify-center p-4 rounded-md object-fit bg-center bg-cover"
        style={{
          backgroundImage: `url(${img + `/w400` + data.backdrop_path})`,
        }}
      >
        <div className="bg-blue/10 backdrop-filter backdrop-blur-sm bg-opacity-20 border border-white/10 w-full p-3 rounded-lg flex flex-col ">
          <span className="font-bold leading-6 drop-shadow-md text-lg">
            {data?.title?.slice(0, 27) || data.name}
          </span>
          <div className="flex items-center">
            <span className="text-xs leading-3 ">
              {new Date(
                data?.release_date || data?.first_air_date
              ).getFullYear()}
            </span>
            <span className="text-xs ml-2 leading-3">Action</span>
            <div className=" flex items-center ml-3">
              <StarRoundedIcon className="text-yellow-500 " fontSize="small" />
              <span className="font-bold text-xs">{data?.vote_average}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
