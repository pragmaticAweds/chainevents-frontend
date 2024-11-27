import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="py-[33px] px-[18px] bg-transparent  w-full text-[#D9D9D9] text-base flex flex-col items-center relative rounded-[5px] h-fit">
            <ul className="flex flex-col gap-y-3 mb-[51px] sidebarLinks pt-16">
                <li>
                    <NavLink
                        to={"/app/home"}
                        className={
                            "flex items-center gap-x-4 py-3 px-7 rounded-full"
                        }
                    >
                        Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/app/events"}
                        className={
                            "flex items-center gap-x-4 py-3 px-7 rounded-full"
                        }
                    >
                        Participants
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/app/tickets"}
                        className={
                            "flex items-center gap-x-4 py-3 px-7 rounded-full"
                        }
                    >
                        Registration
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/app/insight"}
                        className={
                            "flex items-center gap-x-4 w-full py-3 px-7 rounded-full"
                        }
                    >
                        Insight
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
