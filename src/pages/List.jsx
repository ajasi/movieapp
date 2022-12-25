import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import VerticalCard from "../components/VerticalCard";
import useFetch from "../hooks/useFetch";

const sortMovie = [
  { id: 1, value: "popularity.desc", name: "Popularity Descending" },
  { id: 2, value: "popularity.asc", name: "Popularity Ascending" },
  { id: 3, value: "vote_average.desc", name: "Rating Descending" },
  { id: 4, value: "vote_average.asc", name: "Rating Ascending" },
  { id: 5, value: "release_date.desc", name: "Release Date Descending" },
  { id: 6, value: "release_date.asc", name: "Release Date Ascending" },
  { id: 7, value: "original_title.asc", name: "Title (A-Z)" },
  { id: 8, value: "original_title.desc", name: "Title (Z-A)" },
];
const year = [
  { name: 2022 },
  { name: 2021 },
  { name: 2023 },
  { name: 2020 },
  { name: 2019 },
  { name: 2018 },
  { name: 2017 },
  { name: 2016 },
  { name: 2015 },
  { name: 2014 },
  { name: 2013 },
  { name: 2012 },
  { name: 2011 },
  { name: 2010 },
  { name: 2009 },
  { name: 2008 },
  { name: 2007 },
  { name: 2006 },
  { name: 2005 },
  { name: 2004 },
  { name: 2003 },
  { name: 2002 },
  { name: 2001 },
  { name: 2000 },
];
const List = () => {
  const type = useParams().type;
  const discover = useParams().discover;
  const [sort, setSort] = useState("popularity.desc");
  const [genre, setGenre] = useState([]);

  const genres = useFetch(`/genre/${type}/list`);
  const data = useFetch(
    `/${discover}/${type}?&with_genres=${genre}?&sort_by=${sort}`
  );

  return (
    <div className="">
      <Header />
      <div className="flex justify-start  ">
        <div className=" p-10 w-full">
          <div className="z-10">
            <div className="w-full  flex justify-between items-center  ">
              <div className="flex items-center gap-3  relative z-10">
                <DropDown
                  data={sortMovie}
                  checkBox={false}
                  type={"Sort Results By"}
                  setSort={setSort}
                />
                <DropDown
                  data={genres?.data?.genres}
                  checkBox={true}
                  type={"Select Genre"}
                  genre={genre}
                  setGenre={setGenre}
                />
                <DropDown data={year} checkBox={false} type={"Select Year"} />
              </div>
            </div>
          </div>
          <div className=" sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 grid gap-4  ">
            {data?.data?.results?.map((item) => (
              <VerticalCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
