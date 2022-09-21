import React from "react";
import Image from "next/image";
import home from "../../images/home.svg";

const Projects = () => {
  return (
    <div className="bg-bg-projects w-screen">
      <div className="max-w-[90%] mx-auto my-0 py-5">
        <div className="flex items-center justify-between pl-5  w-full">
          <div className="text-5xl  font-sans w-[45%] font-light text-white not-italic">
            Selected Projects
          </div>
          <div className="font-light w-10/12 text-background font-yomayo text-2xl">
            With over 28years of delivering excellence,we carry out our projects
            with a clear intent of captilazing upon the unique nature of the
            diiferent sites while respecting the character of the land and
            building sustainability.
          </div>
        </div>
        <div className="flex pl-5 items-start mb-5 pt-5">
          <button className="bg-view-all text-white p-3">View All</button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 pt-5 pb-5 mb-5 gap-4">
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
          </div>
          <div>
            <Image className="bg-cover bg-center" alt="arch" src={home} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
