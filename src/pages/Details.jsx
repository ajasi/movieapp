import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Layout from "../components/Layout";

const Details = () => {
  const id = useParams().id;
  const type = useParams().type;
  const img = process.env.REACT_APP_IMG_URL;

  const { data, loading, error } = useFetch(`/${type}/${id}`);
  const { data: cast } = useFetch(`/${type}/${id}/credits`);

  return (
    <Layout>
      <div className="relative">
        <div
          className="absolute bg-cover bg-center w-full h-[600px] z-[-10] top-[-40px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(14, 13, 24, 1) 89.5%), url(${
              img + `/original` + data?.backdrop_path
            })`,
          }}
        ></div>
        <div className=" w-full h-fit pt-60 w-xl xl:container px-10 m-auto flex ">
          <div className="min-w-[300px]">
            <img
              className="w-full bg-cover rounded-xl"
              src={img + `/w500` + data?.poster_path}
              alt=""
            />
            <div></div>
          </div>
          <div className="ml-14 text-white flex flex-col">
            <span className="border-[1px] w-fit border-gray-300/50 p-1 rounded-md text-gray-300 text-xs">
              PG-13
            </span>
            <h1 className="text-5xl text-white font-bold my-3">
              {" "}
              {data?.title || data?.name}
            </h1>
            <span className="text-sm text-gray-400">
              {data?.release_date || data?.first_air_date} (US) -
              <span> {data?.runtime}min</span>
            </span>

            <div className="flex text-gray-200 mt-5 gap-6">
              <span className=" cursor-pointer first-letter:backdrop-filter backdrop-blur-sm border-[1px] bg-gradient-to-r from-gray-400/30 border-gray-500 py-0.5 px-3 rounded-full">
                Action
              </span>
              <span className=" cursor-pointer backdrop-filter backdrop-blur-sm border-[1px] bg-gradient-to-r from-gray-400/30 border-gray-500 py-0.5 px-3 rounded-full">
                Adventure
              </span>
              <span className=" cursor-pointer backdrop-filter backdrop-blur-sm border-[1px] bg-gradient-to-r from-gray-400/30 border-gray-500 py-0.5 px-3 rounded-full">
                Comedy
              </span>
            </div>
            <div className="flex items-center gap-7">
              <button className="text-white px-10 py-4 bg-purple rounded-full my-7 gap-4 flex w-fit items-center hover:bg-purple/50 duration-300">
                <PlayArrowIcon />
                Watch Trailer
              </button>
              <button className="p-3 border-[1px] border-gray-300 text-gray-300 hover:bg-purple hover:text-blue hover:border-blue duration-300 rounded-full">
                <BookmarkBorderOutlinedIcon />
              </button>
              <button className="p-3 border-[1px] border-gray-300 text-gray-300 hover:bg-purple hover:text-blue hover:border-blue duration-300 rounded-full">
                <ShareOutlinedIcon />
              </button>
            </div>

            <p className="w-3/4 text-gray-300 text-sm mt-5">{data?.overview}</p>
            <div className="my-10 max-w-xl">
              <h1 className="text-xl text-gray-300 font-bold">Details</h1>
              <div className="flex  mt-3 text-gray-200 w-full justify-between border-gray-500 border-b-[1px] py-2">
                <span className="font-bold">Original Language</span>
                <span>English</span>
              </div>
              <div className="flex text-gray-200 w-full justify-between border-gray-500 border-b-[1px] py-2">
                <span className="font-bold">Budget</span>
                <span>{data?.budget?.toLocaleString("en")}</span>
              </div>
              <div className="flex   text-gray-200 w-full justify-between border-gray-500 border-b-[1px] py-2">
                <span className="font-bold">Revenue</span>
                <span>{data?.revenue?.toLocaleString("en")}</span>
              </div>
            </div>
          </div>
          <div className="text-gray-100 min-w-[320px]">
            <h2 className="text-2xl mb-6 font-bold">Cast and Crew</h2>
            {cast?.cast?.slice(0, 6).map((member) => (
              <div
                key={member?.character}
                className="flex gap-4 items-center mb-5"
              >
                <div className="rounded-full w-16 h-16 bg-cover bg-center overflow-hidden">
                  <img src={img + `/w400` + member.profile_path} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{member.name}</span>
                  <span className="text-sm text-gray-300">
                    as {member?.character}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
