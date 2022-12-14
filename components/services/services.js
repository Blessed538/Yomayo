import React from "react";
import home from "../../images/home.svg";
import Image from "next/image";

const Services = (props) => {
  const { service } = props;
  return (
    <div className="bg-bg-services">
      <div className="md:max-w-[90%] mx-auto w-full px-6 md:pb-14 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
          <div className="font-normal text-counter-color leading-[58px] not-italic text-[48px] font-aktiv">
            Our Services
          </div>
          <div className="mt-1">
            <p className="font-aktiv text-about-p font-normal not-italic leading-[29px]">
              We offer a wide range of technical services which has made a huge
              impact in the construction industry as a whole.
            </p>
          </div>
        </div>
        <div className="lg:pl-32 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  pt-5 md:gap-3">
          {service?.map((item, index) => {
            return (
              <div key={index} className="relative">
                <>
                  <Image
                    className="bg-cover bg-center"
                    alt="arch"
                    width={item.fields.file.details.image.width}
                    height={item.fields.file.details.image.height}
                    layout="responsive"
                    src={"https:" + item.fields.file.url}
                  />
                  <div className="text-white font-aktiv relative -top-10 text-[24.496px] font-medium leading-[31px] not-italic bg-service-header p-3 text-center">
                    {item.fields.title}
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
