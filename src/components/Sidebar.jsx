import Link from 'next/link'

function Sidebar() {
  return (
    <ul className="flex lg:flex-col gap-y-3 lg:mb-[51px] mb-[32px] sidebarLinks lg:pt-16 lg:py-[33px] lg:px-[18px] bg-transparent overflow-auto text-[#D9D9D9] w-[100%] text-base rounded-[5px] lg:h-fit">
      <li>
        <Link
          href={"/app/home"}
          className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
        >
          Overview
        </Link>
      </li>
      <li>
        <Link
          href={"/app/events"}
          className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
        >
          Participants
        </Link>
      </li>
      <li>
        <Link
          href={"/app/tickets"}
          className={"flex items-center gap-x-4 py-3 px-7 rounded-full"}
        >
          Registration
        </Link>
      </li>
      <li>
        <Link
          href={"/app/insight"}
          className={"flex items-center gap-x-4 w-full py-3 px-7 rounded-full"}
        >
          Insight
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
