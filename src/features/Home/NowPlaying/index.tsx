"use client";
import AppSlider from "@/components/Slider";
import SliderContent from "@/components/Slider/SliderContent";
import { MovieData } from "@/services/type";
import React from "react";

interface NowPlayingData {
  nowPlayingData: MovieData[];
}

const NowPlaying: React.FC<NowPlayingData> = ({ nowPlayingData }) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const onClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-[512px] pt-[56px] pb-[47px]">
      <AppSlider setActiveIndex={setActiveIndex} activeIndex={activeIndex}>
        {nowPlayingData?.map((value, index) => (
          <SliderContent
            isCurrentIndex={activeIndex === index}
            key={value?.id}
            imageSrc={value?.poster_path}
            rating={value?.vote_average}
            title={value?.title}
            dateRelease={value?.release_date}
            description={value?.overview}
            genre={value?.genre_ids}
            onClick={() => onClick(index)}
          />
        ))}
      </AppSlider>
    </div>
  );
};

export default NowPlaying;
