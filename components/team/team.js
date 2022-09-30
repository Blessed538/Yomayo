import React, { useEffect } from "react";
import Image from "next/image";
import simi from "../../images/simi.svg";
import ceo from "../../images/ceo.svg";
const Team = (props) => {
  const { teams } = props;
  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(teams);
  }, []);

  return (
    <div className="bg-bg-team">
      <div className="mx-auto my-0 sm:max-w-[90%] w-[90%] lg:py-12 lg:px-7">
        <div className="sm:flex sm:items-start">
          <h3 className="text-text-team font-ortica mt-3 text-[48px] font-light">
            The Dream Team
          </h3>
        </div>
        <div className="grid sm:gap-4 grid-cols-1 lg:grid-cols-4  sm:pt-5 pb-5 mt-4">
          {data?.map((team, index) => {
            return (
              <>
                <div className="">
                  <div key={index} className="relative">
                    <Image
                      src={"https:" + team.fields.file.url}
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="cover"
                      alt="team page"
                      className="relative bg-blue"
                    />
                  </div>

                  <div className=" font-light text-team-member-title font-ortica mt-5 text-[42px] md:text-[24px]">
                    {team.fields.title}
                  </div>
                  <p className="font-aktiv font-light text-team-member-title italic md:text-[16px] sm:text-[21.3592px] sm:font-bold text-sm">
                    {team.fields.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
