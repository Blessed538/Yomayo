import React from "react";
import Image from "next/image";
import architecture from "../../images/architecture.svg";

const About = () => {
  return (
    <div className="container  bg-about-us">
      <div className="flex mx-auto gap-x-12 mx-auto max-w-[90%]">
        <div className="md:w-1/2">
          <Image
            className="h-2/5"
            src={architecture}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="flex mt-12  md:w-1/2 flex-col">
          <div className="text-link mb-3 font-yomayo not-italic">About Us</div>
          <div className="text-link mb-3 font-yomayo not-italic text-2xl">
            BayomAssociate
          </div>
          <p className="text-about-p not-italic font-yomayo text-xl mb-3">
            BayomAssociates is an architectural and engineering firm based in
            Abuja, Nigeria established in 1993 . We are dedicated team of
            Architects, Quantity Surveyors, Structural & Civil engineers who
            genuinely care about your project{" "}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="">
              <div className="text-4xl text-counter-color mb-1">001+</div>
              <p className="font-sans text-lg about-p not-italic">Projects</p>
            </div>
            <div>
              <div className="text-4xl text-counter-color mb-1">01</div>
              <p className="font-sans about-p not-italic text-lg">
                Years of Experience
              </p>
            </div>
            <div>
              <div className="text-4xl text-counter-color mb-1">01+</div>
              <p className="font-sans about-p not-italic text-lg">
                Professional Teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
