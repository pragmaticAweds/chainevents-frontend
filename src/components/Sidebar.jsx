import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import events from "../assets/calendar-tick.svg";
import community from "../assets/people.svg";
import recent from "../assets/recentPoster.png";
import ellipse from "../assets/ellipse.svg";
import ticket from "../assets/clipboard-tick.svg";
function Sidebar() {
  return (
    <div className="py-[33px] px-[18px] bg-[#0D0C0C] border-[0.5px] border-white w-full text-white text-base font-semibold flex flex-col items-center relative rounded-[5px] h-fit">
      <ul className="flex flex-col gap-y-7 mb-[51px] sidebarLinks">
        <li>
          <NavLink
            to={"/app/home"}
            className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
          >
            <img src={home} alt="" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/app/events"}
            className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
          >
            <img src={events} alt="" />
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/app/tickets"}
            className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
          >
            <img src={ticket} alt="" />
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/app/community"}
            className={
              "flex items-center gap-x-4 w-full py-3 px-7 rounded-full"
            }
          >
            <img src={community} alt="" />
            Community
          </NavLink>
        </li>
      </ul>
      <img src={recent} className="mb-[116px]" alt="" />
      <img src={ellipse} className="absolute bottom-[0] left-[0]" alt="" />
    </div>
  );
}

export default Sidebar;
