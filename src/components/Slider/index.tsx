"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css";

interface AppSliderProps {
  children: React.ReactNode;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const AppSlider: React.FC<AppSliderProps> = ({
  children,
  activeIndex,
  setActiveIndex,
}) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
  };

  return (
    <div className="w-full ">
      <Slider
        {...settings}
        afterChange={(newIndex) => setActiveIndex && setActiveIndex(newIndex)}
        ref={(slider) => {
          slider?.slickGoTo(activeIndex ?? 0);
        }}
      >
        {children}
      </Slider>
    </div>
  );
};

export default AppSlider;
