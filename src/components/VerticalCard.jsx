import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const VerticalCard = ({ data }) => {
  const name = data?.title || data?.name;
  const date = data?.release_date || data?.first_air_date;
  const img = process.env.REACT_APP_IMG_URL;

  return (
    <Link to={`/details/${data?.title ? `movie` : `tv`}/${data?.id}`}>
      <div className="mx-2 aspect-[2/3] p-1 bg-white/5 rounded-lg hover:shadow-xl duration-300 hover:bg-purple/20 ">
        <div className="h-full relative cursor-pointer text-white bg-blue flex items-end  justify-center rounded-md overflow-hidden ">
          <img
            className="w-full h-full"
            src={img + `/w300` + data?.poster_path}
            alt=""
          />

          <div className=" flex items-center absolute top-2 left-2 bg-blue/10 px-2 py-1 rounded-full">
            <StarRoundedIcon className="text-yellow-500" fontSize="small" />
            <span className="font-bold mr-1">{data?.vote_average}</span>
          </div>

          <div className="absolute bg-blue/10 backdrop-filter backdrop-blur-sm  border-white/10 w-full p-4   ">
            <span className="font-bold leading-6 drop-shadow-md  truncate ... text-lg">
              {name?.length > 18 ? `${name?.slice(0, 18)}...` : name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs leading-3 ">
                {new Date(date).getFullYear()}
              </span>
              <span className="text-xs ml-2 leading-3">Action</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VerticalCard;
