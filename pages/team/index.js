import React from "react";
import Image from "next/image";
import simi from "../../images/simi.svg";
import ceo from "../../images/ceo.svg";
const Team = (props) => {
  const { teams } = props;
  return (
    <div className="bg-bg-team">
      <div className="mx-auto my-0 sm:max-w-[90%] lg:py-12 lg:px-7">
        <div className="sm:flex sm:items-start">
          <h3 className="text-text-team font-ortica text-center mt-3 sm:text-5xl text-4xl ">
            {" "}
            The Dream Team
          </h3>
        </div>
        <div className="grid sm:gap-4 grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  sm:pt-5 pb-5 mt-4">
          {teams.map((team, index) => {
            return (
              <>
                <div className="">
                  <div
                    className="relative bg-blue bg-center bg-cover min-h-max h-ful"
                    // style={{ minHeight: "443px", height: "443px" }}
                  >
                    <Image
                      src={"https:" + team.fields.file.url}
                      width={team.fields.file.details.image.width}
                      height={team.fields.file.details.image.height}
                      layout="responsive"
                      objectFit="cover"
                      // className="bg-blue bg-center bg-cover min-h-max h-full"
                    />
                  </div>

                  <div className=" font-light text-team-member-title text-2xl sm:text-xl">
                    {team.fields.title}
                  </div>
                  <p className="font-aktiv font-light text-team-member-title italic text-sm">
                    {team.fields.description}
                  </p>
                </div>
              </>
            );
          })}

          {/* <div className="grid">
            <Image
              src={simi}
              // layout="responsive"
              className="bg-green bg-cover bg-center bg-no-repeat"
            />
            <div className="font-light text-team-member-title text-xl">
              Simisola Folarin
            </div>
            <p className="font-aktiv font-light text-team-member-title text-xl italic text-sm">
              Principal Partner
            </p>
          </div> */}
          {/* <div className="grid">
            <Image
              src={ceo}
              // layout="responsive"
              className="bg-blue bg-cover bg-center bg-no-repeat"
            />
            <div className="font-light text-team-member-title text-xl">
              Bode Thomas
            </div>
            <p className="font-aktiv font-light text-team-member-title text-xl italic text-sm">
              Team Lead/ Architect
            </p>
          </div> */}
          {/* <div className="grid">
            <Image
              // layout="responsive"
              src={ceo}
              className="bg-green bg-cover bg-center bg-no-repeat"
            />
            <div className="font-light text-team-member-title text-xl">
              Adaobi Martins
            </div>
            <p className="font-aktiv font-light text-team-member-title  sm:text-xl italic text-sm">
              Team Lead/ Civil Engineering
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
