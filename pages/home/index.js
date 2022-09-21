import React from "react";
import home from "../../images/home.svg";
import companyLogo from "../../images/logo.svg";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <div className="w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-auto px-10">
            <div className="flex  justify-between pt-5 items-center">
              <div className="text-link font-yomayo text-2xl">
                BayomAssociate
              </div>
              <div className="items-center flex">
                <div className="text-link font-yomayo mr-3 text-base">Home</div>
                <div className="text-link font-yomayo text-base">Works</div>
              </div>
            </div>
            <div className="flex pt-24 flex-col justify-center">
              <div className="sm:text-7xl lg:text-7xl text-6xl font-semibold mx-auto text-link font-yomayo">
                Architects that design the future
              </div>
              <p className="text-sub-text sm:text-2xl text-3xl font-light not-italic mt-2 font-yomayo mb-3">
                As an award wining architectural firm ,we have designed many
                beautiful buildings across Africa
              </p>
              <div className="text-center mt-4 max-w-[50%] bg-btn-bg p-4 text-white">
                Contact Us
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src={home} width={100} height={100} layout="responsive" />
          </div>
        </div>
      </div>
      <div className="md:flex grid-cols-3 bg-company-logo md:justify-between md:flex-row flex-col items-center px-12 p-4">
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
        <Image src={companyLogo} width={100} height={100} />
      </div>
    </div>
  );
};

export default index;
