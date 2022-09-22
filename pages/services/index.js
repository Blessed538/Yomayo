import React from "react";
import home from "../../images/home.svg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-bg-services">
      <div className="md:max-w-[90%] mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
          <div className="font-light text-counter-color not-italic text-4xl font-aktiv">
            Our Services
          </div>
          <div className="mt-1">
            <p className="font-aktiv text-about-p font-light not-italic text-lg">
              We offer a wide range of technical services which has made a huge
              impact in the construction industry as a whole.
            </p>
          </div>
        </div>
        <div className="lg:pl-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pt-5 md:gap-3">
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
            <div className="text-white font-aktiv relative -top-10 bg-service-header p-4 text-center">
              Architecture
            </div>
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
            <div className="text-white font-aktiv relative -top-10 bg-service-header p-4 text-center">
              Architecture
            </div>
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
            <div className="text-white font-aktiv relative -top-10 bg-service-header p-4  text-center">
              Architecture
            </div>
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
            <div className="text-white font-aktiv relative -top-10 bg-service-header p-4 text-center">
              Architecture
            </div>
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
            <div className="text-white font-aktiv relative -top-10 bg-service-header p-4 text-center">
              Architecture
            </div>
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
            <div className="text-white font-aktiv relative -top-10 bg-service-header p-4  text-center">
              Architecture
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
