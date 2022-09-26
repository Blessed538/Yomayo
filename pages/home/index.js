import React from "react";
import companyLogo from "../../images/hero.png";
import Image from "next/image";

const index = (props) => {
  const { item } = props;
  return (
    <div>
      <div className="w-full max-w-full">
        <div className="grid grid-cols-1 sm:bg-hero">
          <div className="md:px-12 px-6 pt-3 lg:pt-6">
            <div className="flex justify-between pt-5 items-center">
              <div className="text-link font-aktiv text-2xl">
                BayomAssociate
              </div>
              <div className="hidden sm:items-center sm:flex">
                <div className="text-link font-aktiv mr-3 text-base">Home</div>
                <div className="text-link font-aktiv text-base">Works</div>
              </div>
              <div className="sm:hidden  sm:items-center">
                <button
                  id="toggle-sidebar"
                  class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Toggle Sidebar
                </button>
              </div>
            </div>
            <div className="flex pt-28 flex-col sm:max-w-[70%] lg:max-w-[45%]">
              <div className="sm:text-6xl xl:text-6xl  xl:max-w-[60%] text-6xl font-bold text-counter-color font-aktiv">
                Architects that design the future
              </div>
              <p className="text-sub-text sm:text-2xl text-lgfont-light not-italic mt-2 font-aktiv mb-3">
                As an award wining architectural firm ,we have designed many
                beautiful buildings across Africa
              </p>
              <div className=" mt-4 sm:max-w-[40%] bg-btn-bg p-4 mb-5 text-center text-white">
                Contact Us
              </div>
            </div>
          </div>
          <div className="md:flex lg:px-12 md:px-6 justify-between bg-company-logo sm:flex-col md:flex-row flex-col items-center p-4">
            <div className="text-2xl not-italic font-aktiv text-our-client xs:mb-5 xs:text-center font-medium">
              Our Clients
            </div>
            <div className="md:w-[90%] flex items-center justify-between">
              {item.fields.companyLogos.map((logo) => (
                <Image
                  src={"https:" + logo.fields.file.url}
                  width={90}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
