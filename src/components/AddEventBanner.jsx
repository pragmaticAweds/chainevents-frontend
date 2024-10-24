import { NavLink } from "react-router-dom";
import addIcon from "../assets/carbon_add-filled.svg";
import ellipseGrey from "../assets/ellipse-grey.svg";
import ellipseLarge from "../assets/ellipse-large.svg";
import illus from "../assets/eventIllus.png";
function AddEventBanner() {
  return (
    <div className="pt-[33px] pb-[23px] pl-[89px] flex items-center text-white gap-x-6 w-full bg-transparent border-[2px] border-white relative rounded-[5px]">
      <img src={ellipseGrey} className="absolute top-0 left-0" alt="" />
      <img src={ellipseLarge} alt="" className="absolute bottom-0 right-0" />
      <div>
        <h2 className="text-[40px] font-bold">Add Your Event</h2>
        <p className="text-[#BFB7B7] w-[348px] text-base font-medium mt-4 mb-[21px]">
          StarkEvents is a discovery app for all Starknet-based events and
          communities.
        </p>
        <NavLink
          to="/app/create-event"
          className="flex items-center w-fit gap-x-[10px] text-[#121212] text-sm font-medium bg-white py-3 px-8 rounded-[5px]"
        >
          <img src={addIcon} alt="" /> Add Event
        </NavLink>
      </div>
      <img src={illus} alt="" />
    </div>
  );
}

export default AddEventBanner;
