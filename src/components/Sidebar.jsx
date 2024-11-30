import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="flex lg:flex-col gap-y-3 lg:mb-[51px] mb-[32px] sidebarLinks lg:pt-16 lg:py-[33px] lg:px-[18px] bg-transparent overflow-auto text-[#D9D9D9] w-[100%] text-base rounded-[5px] lg:h-fit">
      <li>
        <NavLink
          to={"/app/home"}
          className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
        >
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/app/events"}
          className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
        >
          Participants
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/app/tickets"}
          className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
        >
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/app/insight"}
          className={"flex items-center gap-x-4 w-full py-3 px-7 rounded-full"}
        >
          Insight
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
