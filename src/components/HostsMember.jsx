import React from "react";
import Image from "next/image";
import { HostLine } from "./HostsCard";

export const Member = ({ pillText, hostLineImg, pillType }) => {
  return (
    <div className="flex justify-between w-max pb-3 border-b-[#C3B07A] border-b-[.3px] ">
      <div className="flex space-x-3 items-center">
        <Image src={hostLineImg} alt="hostlineimage" width={30} height={30} />
        <p>Teaminfuralegend </p>
        <p className="text-sm text-[#D9D9D9CC]">taminfuraweb3@gmail.com</p>
        <span
          className={
            pillType == "green"
              ? `bg-[#34C75966] text-xs text-[#83F7A0] inline-block py-2 rounded-full px-2`
              : `bg-[#FFD3594D] text-xs text-[#FFD359] inline-block py-2 rounded-full px-2`
          }
        >
          {pillText}
        </span>
      </div>
    </div>
  );
};

const HostsMember = () => {
  return (
    <div>
      <div className="mt-5 max-w-max border border-white px-4 py-[14px] pb-0 rounded flex flex-col gap-y-[14px]">
        <Member
          pillText="Creator"
          pillType="green"
          hostLineImg={"/assets/avatar1.png"}
        />
        <Member
          pillText="Manager"
          pillType="yellow"
          hostLineImg={"/assets/avatar2.png"}
        />
        <Member
          pillText="Manager"
          pillType="yellow"
          hostLineImg={"/assets/avatar3.png"}
        />
        <Member
          pillText="Manager"
          pillType="yellow"
          hostLineImg={"/assets/avatar3.png"}
        />
      </div>
    </div>
  );
};

export default HostsMember;
