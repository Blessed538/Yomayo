import React from "react";
import Image from "next/image";
import simi from "../../images/simi.svg";
import ceo from "../../images/ceo.svg";
const Team = () => {
  return (
    <div className="bg-bg-team">
      <div className="mx-auto my-0 max-w-[90%] py-12 px-7">
        <div className="flex items-start">
          <h3 className="text-text-team font-sans text-5xl"> The Dream Team</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4 pt-5 pb-5 mt-4">
          <div className="grid">
            <Image
              src={ceo}
              className="bg-blue bg-cover  inline bg-center bg-no-repeat"
            />
            <div className="font-sans font-light text-team-member-title text-3xl">
              DANIEL JUSTICE
            </div>
            <p className="font-sans font-light text-team-member-title text-3xl italic text-sm">
              Founder/ Ceo
            </p>
          </div>
          <div className="grid">
            <Image
              src={simi}
              className="bg-green bg-cover bg-center bg-no-repeat"
            />
            <div className="font-sans font-light text-team-member-title text-3xl">
              Simisola Folarin
            </div>
            <p className="font-sans font-light text-team-member-title text-3xl italic text-sm">
              Principal Partner
            </p>
          </div>
          <div className="grid">
            <Image
              src={ceo}
              className="bg-blue bg-cover bg-center bg-no-repeat"
            />
            <div className="font-sans font-light text-team-member-title text-3xl">
              Bode Thomas
            </div>
            <p className="font-sans font-light text-team-member-title text-3xl italic text-sm">
              Team Lead/ Architect
            </p>
          </div>
          <div className="grid">
            <Image
              src={ceo}
              className="bg-green bg-cover bg-center bg-no-repeat"
            />
            <div className="font-sans font-light text-team-member-title text-3xl">
              Adaobi Martins
            </div>
            <p className="font-sans font-light text-team-member-title text-3xl italic text-sm">
              Team Lead/ Civil Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
