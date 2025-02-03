import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className="flex text-[#FFFFFF] font-semibold text-sm leading-[18px] items-center"
    >
      <img src="/assets/chainevtlogo.svg" alt="" className="w-10 h-10" />
      <span>CHAIN EVENTS</span>
    </Link>
  );
}

export default Logo;
