import sampleThumbnail from "../assets/sample-thumbnail.png";
import calender from "../assets/calender.svg";
import { NavLink } from "react-router-dom";

function EventStrip({ thumbnail, title, subTitle, date }) {
  return (
    <div className="w-full py-[22px] px-[24px] bg-[#0D0C0C] flex justify-between items-center">
      <div className="flex items-stretch gap-x-[11px]">
        <img src={sampleThumbnail} alt="" />
        <div>
          <h3 className="mb-1 text-xl font-medium text-white">
            Starknet Kenya Meetup
          </h3>
          <h5 className="text-sm text-[#C4C4C4] pb-[11px] border-b-white border-b-[0.3px]">
            Exploring The starknet ecosystem{" "}
          </h5>
          <h4 className="text-sm text-[#08C51A] gap-x-2 mt-2 flex items-center">
            <img src={calender} alt="" />
            24th March - 26th March 2024
          </h4>
        </div>
      </div>
      <NavLink
        to="/app/event/1"
        className="py-4 px-[44px] bg-white rounded-[5px] text-sm font-medium text-[#121212]"
      >
        Go to event
      </NavLink>
    </div>
  );
}

export default EventStrip;
