import React from "react";
import home from "../../images/home.svg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-bg-services">
      <div className="max-w-[80%] mx-auto w-full py-12">
        <div className="flex flex-row mb-5 justify-between">
          <div className="w-1/4">
            <div className="font-light  text-counter-color not-italic text-4xl font-yomayo">
              Our Services
            </div>
          </div>
          <div className="w-2/4 mt-1">
            <p className="font-yomayo text-about-p font-light not-italic text-lg">
              We offer a wide range of technical services which has made a huge
              impact in the construction industry as a whole.
            </p>
          </div>
        </div>
        <div class=" flex justify-end pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="">
                <Image className="bg-cover bg-center" alt="arch" src={home} />
              </div>
              <div className="text-white font-yomayo  bg-service-header p-4 text-center">
                Architecture
              </div>
            </div>
            <div className=" bg-hero bg-no-repeat bg-cover bg-center">
              <p> impact in the construction industry as a whole.</p>
            </div>
            <div class=" bg-hero bg-no-repeat bg-cover bg-center">
              <p> impact in the construction industry as a whole.</p>
            </div>
            <div class=" bg-hero bg-no-repeat bg-cover bg-center">
              <p> impact in the construction industry as a whole.</p>
            </div>
          </div>

          {/* <div class=" bg-hero bg-no-repeat bg-cover bg-center">
            <p> impact in the construction industry as a whole.</p>
          </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Services;
