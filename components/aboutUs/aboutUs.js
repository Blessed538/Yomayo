import React from "react";
import Image from "next/image";
import architecture from "../../images/architecture.svg";
import styles from "../../styles/Home.module.css";
const About = (props) => {
  const { item, fields } = props;

  return (
    <div className="bg-about-us">
      <div
        className="grid lg:gap-x-3 grid-cols-1 lg:grid-cols-2 mx-auto w-[90%]  pt-8
                   lg:max-w-[976px] lg:w-[100%] md:max-w-[768px] md:w-[80%] xl:max-w-[1440px] xl:w-[80%] "
      >
        <div className="xs:pl-7 sm:pl-5 md:pl-0">
          <div className={styles.container}>
            <Image
              src={"https:" + item?.fields.file.url}
              width={100}
              height={100}
              alt="about-us"
              layout="responsive"
              className="md:bg-contain"
            />
          </div>
        </div>
        <div className="lg:pl-8 py-7">
          <div className="text-link font-aktiv  font-medium  not-italic md:text-2xl">
            About Us
          </div>
          <div className="mb-2 text-counter-color font-ortica  text-[40px] not-italic">
            BayomAssociate
          </div>
          <p className="text-about-p font-light text-[20px] not-italic font-aktiv sm:mb-3">
            BayomAssociates is an architectural and engineering firm based in
            Abuja, Nigeria established in 1993 . We are dedicated team of
            Architects, Quantity Surveyors,Structural & Civil engineers who
            genuinely care about your project
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="font-aktiv">
              <div className="md:text-[40px] leading-[auto] font-bold text-counter-color mb-1">
                001+
              </div>
              <p className="font-ortica font-light  about-p not-italic md:text-[18px]">
                Projects
              </p>
            </div>
            <div className="font-aktiv">
              <div className="md:text-[40px] leading-[auto] font-bold  text-counter-color mb-1">
                01
              </div>
              <p className="font-ortica font-light about-p not-italic md:text-[18px]">
                Years of Experience
              </p>
            </div>
            <div className="font-aktiv">
              <div className="md:text-[40px] leading-[auto] font-bold text-counter-color mb-1">
                01+
              </div>
              <p className="font-ortica font-light about-p not-italic md:text-[18px]">
                Professional Teams
              </p>
            </div>
          </div>
          <div className="pt-7 ">
            <div className="pb-10 font-aktiv text-view-all pt-10 font-medium not-italic text-[32px] leading-[37px]">
              Our Clients
            </div>
            <div className="grid grid-cols-4  gap-12 lg:max-w-[700px] lg:w-[70%]">
              {fields?.fields?.companyLogos?.map((logo, index) => (
                <Image
                  key={index}
                  alt="clients logo"
                  src={"https:" + logo.fields.file.url}
                  width="100%"
                  height="100%"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
