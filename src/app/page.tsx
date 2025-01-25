import AppButton from "@/components/AppButton";
import BaseBackgroundWrapper from "@/components/BaseBackgroundWrapper";
import MovieCard from "@/components/MovieCard";
import AppSlider from "@/components/Slider";
import Title from "@/components/Title";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[512px] pt-[56px] pb-[47px]">
        <AppSlider />
      </div>
      <BaseBackgroundWrapper>
        <div className="px-[120px] pt-[90px] pb-[115px]">
          <div className="flex justify-between items-center mb-[43px]">
            <Title title="Discover Movies" />
            <div className="flex flex-row space-x-[21px]">
              <AppButton color="default" type="primary">
                Popularity
              </AppButton>
              <AppButton color="green" type="default">
                Release Date
              </AppButton>
            </div>
          </div>
          <div className="grid max-lg:grid-cols-3 grid-cols-5 gap-[25px]">
            {[...Array(8)].map((_, index) => (
              <MovieCard key={index} />
            ))}
          </div>
        </div>
      </BaseBackgroundWrapper>
    </>
  );
};

export default HomePage;
