import React from "react";
import Button from "./Button";
// import yellowAvatar from "../assets/yellowAvatar.png";
// import greenGlobe from "../assets/tabler_world.svg";
// import visibility from "../assets/iconoir_eye.svg";
import Image from "next/image";

const VisibilityCard = () => {
  return (
    <div>
      <h3 className="mb-1 text-base leading-5 font-medium">Visibility</h3>
      <h4 className="text-[#D9D9D9CC] text-sm">
        Control how people can find your event
      </h4>

      <div className="mt-4 border-[.3px] border-white rounded p-4 flex items-start gap-x-2">
        <Image
          src={"/assets/yellowAvatar.png"}
          alt="#"
          className="w-[34px] h-[34px]"
          width={34}
          height={34}
        />
        <div className="w-full">
          <h4 className="text-[10px] mb-1 text-[#D9D9D9CC]">Managing Event</h4>
          <h3 className="font-semibold flex items-center mb-2">
            Teaminfuralegend
            <span className="ml-3 text-[10px] font-normal text-[#D9D9D9CC]">
              Personal
            </span>
          </h3>
          <h3 className="flex items-center w-full gap-x-2 mb-2">
            <Image
              src={"/assets/tabler_world.svg"}
              alt="green globe"
              width={16}
              height={16}
            />
            <span className="text-xs text-[#83F7A0]">Public</span>
            <span className="text-[10px] font-normal text-[#D9D9D9CC]">
              This event is listed on the profile pages of hosts.
            </span>
          </h3>
          <button className="bg-[#C4C4C433] py-2 px-[10px] flex gap-x-2 items-center rounded text-xs">
            <Image
              src={"/assets/iconoir_eye.svg"}
              alt="visibility"
              className="inline"
              width={14}
              height={14}
            />
            <span>Change Visibility</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisibilityCard;
