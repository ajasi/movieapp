import React, { useRef } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VerticalCard from "./VerticalCard";

const Slide = ({ title, data, vertical }) => {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 3,

          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <span className="text-white2 font-bold text-2xl">{title}</span>
        <div className="text-white gap-2 flex mr-6">
          <button
            onClick={previous}
            className="px-3 bg-purple/40 hover:bg-purple  rounded-xl duration-300"
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            onClick={next}
            className="px-3 bg-purple/20 hover:bg-purple rounded-xl duration-300"
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>

      <div className="text-white my-3 relative">
        <div className="absolute w-20 right-0 h-full bg-gradient-to-l from-blue z-10" />
        <div className="flex flex-col  w-full">
          <Slider {...settings} ref={(c) => (slider.current = c)}>
            {data?.results?.map((item) => (
              <Link
                className="dragg"
                key={item.id}
                to={`/details/${item.title ? `movie` : `tv`}/${item.id}`}
              >
                {vertical ? (
                  <VerticalCard key={item.id} data={item} />
                ) : (
                  <Card data={item} />
                )}
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;
