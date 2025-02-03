import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full px-5 lg:px-[80px]">
      <div className="h-[0.5px] bg-[#C3B07A] w-full" />
      <div className="flex justify-between my-2 sm:my-4 items-center">
        <h1 className="text-white">CHAINEVENTS</h1>
        <div className=" flex justify-center items-center space-x-4">
          <Link href={"/"}>
            <Image
              src={"/assets/whatsapp.svg"}
              width={20}
              height={20}
              alt="whatsapp"
            />
          </Link>
          <Link href={"/"}>
            <Image src={"/assets/x.svg"} width={20} height={20} alt="x" />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/assets/discord.svg"}
              width={20}
              height={20}
              alt="discord"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
