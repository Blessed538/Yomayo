import React from "react";
import companyLogo from "../../images/hero.png";
import Image from "next/image";

const index = (props) => {
  const { item } = props;
  return (
    <div>
      <div className="w-full max-w-full">
        <div
          className="grid grid-cols-1 lg:bg-hero lg:bg-cover  md:bg-contain bg-left-top bg-no-repeat"
          data-testid="background"
        >
          <div className="md:px-12 px-6 pt-3 lg:pb-40 ">
            <div className="flex justify-between pt-5  items-center">
              <div className="text-link text-2xl leading-[28px] font-extrabold not-italic">
                BayomAssociates
              </div>
              <div className="items-center flex">
                <div className="text-link font-bold font-aktiv mr-3 text-base">
                  Home
                </div>
                <div className="text-link font-aktiv  text-base">Works</div>
              </div>
            </div>
            <div className="flex pt-28 flex-col sm:max-w-[480px] sm:w-[100%] md:max-w-[768px] md:w-[100%] lg:max-w-[976px] lg:w-[100%] xl:max-w-[1440px] xl:w-[70%]">
              <div className="sm:text-6xl xl:text-7xl md:w-[70%] md:max-w-[768px] lg:max-w-[976px] lg:w-[40%]  xl:max-w-[1440px] xl:w-[40%] leading-[78px] text-6xl font-bold text-hero-header font-aktiv">
                Architects that design the future
              </div>
              <p className="text-sub-text md:max-w-[768px] md:w-[67%] lg:max-w-[976px] lg:w-[40%] xl:max-w-[1440px] xl:w-[40%]  font-light not-italic mt-2 font-aktiv mb-3">
                As an award wining architectural firm, we have designed many
                beautiful buildings across Africa
              </p>
              <div className="mt-4 md:max-w-[768px] md:w-[20%]  sm:max-w-[480px] sm:w-[40%] lg:max-w-[976px]  xl:max-w-[1440px] xl:w-[20%]  font-[24px] bg-btn-bg p-4 mb-5 font-medium text-center text-white">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
