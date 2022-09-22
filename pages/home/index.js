import React from "react";
import home from "../../images/home.svg";
import companyLogo from "../../images/logo.svg";
import Image from "next/image";

const index = (props) => {
  const { item } = props;
  console.log("HOMEITEM", item);

  return (
    <div>
      <div className="w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="mx-auto px-10">
            <div className="flex justify-between pt-5 items-center">
              <div className="text-link font-aktiv text-2xl">
                BayomAssociate
              </div>
              <div className="items-center flex">
                <div className="text-link font-aktiv mr-3 text-base">Home</div>
                <div className="text-link font-aktiv text-base">Works</div>
              </div>
            </div>
            <div className="flex pt-28 flex-col justify-center">
              <div className="sm:text-6xl  lg:text-8xl xl:text-8xl  text-6xl font-semibold lg:mx-auto text-link font-aktiv">
                Architects that design the future
              </div>
              <p className="text-sub-text sm:text-2xl text-lgfont-light not-italic mt-2 font-aktiv mb-3">
                As an award wining architectural firm ,we have designed many
                beautiful buildings across Africa
              </p>
              <div className="text-center mt-4 max-w-[50%] bg-btn-bg p-4 text-white">
                Contact Us
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <Image
              src={"https:" + item.fields.home.fields.file.url}
              width={item.fields.home.fields.file.details.image.width}
              height={item.fields.home.fields.file.height}
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="md:flex grid-cols-3 bg-company-logo md:justify-between md:flex-row flex-col items-center md:px-12 p-4">
        {item.fields.companyLogos.map((logo) => (
          <Image
            src={"https:" + logo.fields.file.url}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
