import React from "react";
import Image from "next/image";
import architecture from "../../images/architecture.svg";

const About = (props) => {
  const { item } = props;

  return (
    <div className="bg-about-us">
      <div className="grid gap-x-3 grid-cols-1  lg:grid-cols-2 mx-auto my-auto items-center max-w-[90%]">
        <div className="md:block hidden">
          <Image
            src={"https:" + item?.fields.file.url}
            width={100}
            height={100}
            alt="about-us"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col lg:pl-8 py-7">
          <div className="text-link font-aktiv lg:text-left text-center not-italic md:text-4xl">
            About Us
          </div>
          <div className="text-link mb-3 lg:text-left text-center my-5 font-aktiv not-italic text-2xl">
            BayomAssociate
          </div>
          <p className="text-about-p not-italic font-aktiv sm:text-2xl sm:mb-3">
            BayomAssociates is an architectural and engineering firm based in
            Abuja, Nigeria established in 1993 . We are dedicated team of
            Architects, Quantity Surveyors, Structural & Civil engineers who
            genuinely care about your project{" "}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="font-aktiv">
              <div className="sm:text-4xl text-sm text-counter-color mb-1">
                001+
              </div>
              <p className="font-ortica text-sm about-p not-italic">Projects</p>
            </div>
            <div className="font-aktiv">
              <div className="sm:text-4xl text-counter-color mb-1">01</div>
              <p className="font-ortica about-p not-italic sm:text-lg">
                Years of Experience
              </p>
            </div>
            <div className="font-aktiv">
              <div className="sm:text-4xl text-counter-color mb-1">01+</div>
              <p className="font-ortica about-p not-italic sm:text-lg">
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
