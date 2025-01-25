import AppButton from "@/components/AppButton";
import BaseBackground from "@/components/BaseBackground";
import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import React from "react";

const HomePage = () => {
  return (
    <>
      <BaseBackground />
      <div className="px-[120px] pt-[90px] pb-[115px] relative z-[2]">
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
        <div className="grid grid-cols-5 gap-[25px]">
          {[...Array(8)].map((_, index) => (
            <MovieCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
