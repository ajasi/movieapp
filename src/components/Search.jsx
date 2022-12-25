import { useEffect, useRef, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { makeRequest } from "../makeRequests";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let menuRef = useRef();
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setisOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(`/search/multi?query=${query}`);
        setData(res.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    query && fetchData();
  }, [query]);

  return (
    <div>
      <div ref={menuRef} className="relative flex items-center justify-start ">
        <SearchOutlinedIcon className="absolute ml-2 pointer-events-none" />
        <input
          onChange={handleInput}
          onClick={() => setisOpen(!isOpen)}
          type="text"
          className={` border-none focus:ring-0 outline-none bg-white/5 pl-[40px] w-10 h-10  rounded-full cursor-pointer duration-500 focus:cursor-text ${
            isOpen && `w-[250px]`
          }`}
        />

        {query && isOpen && (
          <div className="absolute bg-blue min-w-[300px] max-h-[350px] overflow-auto rounded-xl  top-10 z-10!important">
            {data?.results?.map((movie) => (
              <Link
                key={movie.id}
                to={`/details/${movie.title ? `movie` : `tv`}/${movie.id}`}
              >
                <div className=" px-4 py-2 hover:bg-white/5 cursor-pointer">
                  {movie.title || movie.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
