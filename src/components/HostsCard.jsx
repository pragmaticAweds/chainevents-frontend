import React from "react";
import Button from "./Button";
// import writeIcon from "../assets/tabler_edit.svg";
// import editIcon from "../assets/editIcon.svg";
// import avatar1 from "../assets/avatar1.png";
// import avatar2 from "../assets/avatar2.png";
// import avatar3 from "../assets/avatar3.png";
import Image from "next/image";
import EditIcon from "@/icons/EditIcon";

const HostsCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="mb-1 text-base leading-5 font-medium">Hosts</h3>
          <h4 className="text-[#D9D9D9CC] text-sm">
            Add hosts, special guests, and event managers.
          </h4>
        </div>
        <button className="py-2 px-6 rounded-sm bg-[#C4C4C433] text-xs leading-4 flex items-center gap-x-1">
          <EditIcon />
          Add Host
        </button>
      </div>
      <div className="mt-5 border border-white px-4 py-[14px] pb-0 rounded flex flex-col gap-y-[14px]">
        <HostLine
          pillText="Creator"
          pillType="green"
          hostLineImg={"/assets/avatar1.png"}
        />
        <HostLine
          pillText="Manager"
          pillType="yellow"
          hostLineImg={"/assets/avatar2.png"}
        />
        <HostLine
          pillText="Manager"
          pillType="yellow"
          hostLineImg={"/assets/avatar3.png"}
        />
        <HostLine
          pillText="Manager"
          pillType="yellow"
          hostLineImg={"/assets/avatar3.png"}
        />
      </div>
    </div>
  );
};

export const HostLine = ({ pillText, hostLineImg, pillType }) => {
  return (
    <div className="flex justify-between pb-3 border-b-[#C3B07A] border-b-[.3px]">
      <div className="flex space-x-3 items-center">
        <Image src={hostLineImg} alt="hostlineimage" width={30} height={30} />
        <p>Teaminfuralegend </p>
        <p className="text-sm text-[#D9D9D9CC]">taminfuraweb3@gmail.com</p>
        <span
          className={
            pillType == "green"
              ? `bg-[#34C75966] text-xs text-[#83F7A0] inline-block px-6 py-2 rounded-[100px]`
              : `bg-[#FFD3594D] text-xs text-[#FFD359] inline-block px-6 py-2 rounded-[100px]`
          }
        >
          {pillText}
        </span>
      </div>
      <button>
        <EditIcon />
      </button>
    </div>
  );
};
export default HostsCard;
