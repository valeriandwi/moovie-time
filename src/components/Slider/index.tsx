"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderContent from "./SliderContent";
import "./index.css";

const AppSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    variableWidth: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
  };

  const dummyData = [
    {
      imageSrc: "/image0.jpg",
      rating: "1",
      title: "Title 0",
      yearRelease: "2020",
    },
    {
      imageSrc: "/image1.jpg",
      rating: "2",
      title: "Title 1",
      yearRelease: "2021",
    },
    {
      imageSrc: "/image2.jpg",
      rating: "3",
      title: "Title 2",
      yearRelease: "2022",
    },
    {
      imageSrc: "/image3.jpg",
      rating: "4",
      title: "Title 3",
      yearRelease: "2023",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {dummyData.map((data, index) => (
          <SliderContent
            key={index}
            imageSrc={data.imageSrc}
            rating={data.rating}
            title={data.title}
            yearRelease={data.yearRelease}
            description=""
            genre=""
          />
        ))}
      </Slider>
    </div>
  );
};

export default AppSlider;
