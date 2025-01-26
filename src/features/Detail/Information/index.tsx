import StarIcon from "@/assets/StarIcon";
import React from "react";
import { informationKeys } from "./constants";
import { Divider } from "antd";

interface DetailInformationProps extends DetailInformation {
  rating?: string;
}

type DetailInformation = {
  user_score?: string;
  status?: string;
  language?: string;
  budget?: string;
  production?: string;
};

type InformationKey = keyof DetailInformation;

const DetailInformation: React.FC<DetailInformationProps> = ({
  rating,
  ...props
}) => {
  return (
    <div className="absolute h-[80px] w-full bg-black bg-opacity-50 text-text-primary pl-[377px] py-[17px]">
      <div className="flex flex-row items-center space-x-[12px]">
        <div className="flex flex-row space-x-[17px] items-center">
          <StarIcon height="32" width="32" />
          <span className="text-text-primary text-title">{rating}</span>
          {informationKeys.map(({ key, value, label }, index) => (
            <div key={key} className="flex flex-row h-full items-center">
              <div className="flex flex-col space-y-[3px] justify-center">
                <p className="text-text-secondary text-xs font-medium">
                  {label}
                </p>
                <p className="text-white text-xs font-medium">
                  {props[value as InformationKey] ?? "Unknown"}
                </p>
              </div>
              {index !== informationKeys.length - 1 && (
                <Divider
                  type="vertical"
                  className="!bg-white opacity-20 !h-[41px] !mx-[33px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailInformation;
