import { useRouter } from "next/navigation";
import React from "react";
const EventCard = ({ baseRoute }) => {
  let router = useRouter();
  return (
    <div className="text-white text-xs leading-4">
      <h4 className="w-full py-2 px-[11px] font-semibold text-left">
        Sep 6, Friday
      </h4>
      <div className="border-[#F5F5F5] border-[.3px] pt-[26px] pb-4 px-6 bg-[#1E1D1D] flex items-stretch gap-x-4 rounded">
        <img
          src="/assets/eventImage.png"
          className="w-[113px] h-[117px] rounded"
          alt=""
        />
        <div className="text-[10px] leading-3 text-[#D9D9D9CC] font-medium text-left">
          <h5 className="mb-2 flex items-center gap-x-1">
            <img src="/assets/globe.svg" alt="" /> 10:00 AM
          </h5>
          <button
            onClick={() => {
              if (baseRoute === "your-events") return;
              router.push(`/${baseRoute}/1`);
            }}
            className="text-sm leading-[18px] text-white font-semibold mb-3"
          >
            Workshop: Leveraging The Graph to build Your Dapp
          </button>
          <h5 className="mb-2">Lagos, Nigeria</h5>
          <h5 className="mb-3">Colab Innovation Campus</h5>
          <div className="flex gap-x-[10px]">
            {baseRoute === "your-events" && (
              <button
                className="p-[6px] bg-[#D9D9D9] rounded-sm text-[#3A3A3A]"
                onClick={() => {
                  router.push(`/${baseRoute}/1`);
                }}
              >
                Manage Event <span></span>
              </button>
            )}
            <img src="/assets/attendees.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
