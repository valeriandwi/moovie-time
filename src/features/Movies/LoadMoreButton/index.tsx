"use client";
import AppButton from "@/components/AppButton";
import { useRouter } from "next/navigation";
import React from "react";

interface LoadMoreButtonProps {
  apiParams: Record<string, string>;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ apiParams }) => {
  const router = useRouter();

  const onLoadMoreClick = () => {
    const newParams = {
      ...apiParams,
      page: (Number(apiParams.page) + 1).toString(),
    };
    const searchParams = new URLSearchParams(newParams);
    router.replace(`/movies?${searchParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mt-16">
      <AppButton
        color="default"
        type="primary"
        className="w-[151px]"
        onClick={onLoadMoreClick}
      >
        Load More
      </AppButton>
    </div>
  );
};

export default LoadMoreButton;
