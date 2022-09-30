import React from "react";
import Image from "next/image";
import home from "../../images/home.svg";

const Projects = (props) => {
  const { projects } = props;

  return (
    <div className="bg-bg-projects w-screen">
      <div className="sm:max-w-[90%] w-[90%] mx-auto py-5">
        <div className="flex items-center md:flex-row sm:flex-col flex-col md:justify-between pl-0 md:pl-5  w-full">
          <div className="text-[48px] font-ortica md:w-[45%] w-[100%] font-light text-white not-italic">
            Selected Projects
          </div>
          <div className="font-light md:w-10/12 w-[100%] py-4 text-background leading-[39px] text-[24px] font-aktiv md:text-lg">
            With over 28years of delivering excellence,we carry out our projects
            with a clear intent of captilazing upon the unique nature of the
            diiferent sites while respecting the character of the land and
            building sustainability.
          </div>
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-3 pt-5 pb-5 mb-5 gap-4">
          {projects?.map((item, index) => {
            return (
              <div key={index} className="relative group">
                <>
                  <Image
                    className="bg-cover bg-center hover:scale-150 hover:bg-project-hover  ease-in duration-500 "
                    alt="arch"
                    width={item.fields.file.details.image.width}
                    height={item.fields.file.details.image.height}
                    layout="responsive"
                    src={"https:" + item.fields.file.url}
                  />
                  <div className="hidden group-hover:absolute group-hover:bottom-4  group-hover:left-4 group-hover:block">
                    <div className="text-white font-aktiv not-italic text-lg">
                      {item.fields.title}
                    </div>
                    <div className="text-white font-aktiv not-italic text-base">
                      {item.fields.description}
                    </div>
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

export default Projects;
