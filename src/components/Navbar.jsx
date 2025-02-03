"use client";

import { useState } from "react";
import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { createPortal } from "react-dom";
import { AccountSidebar } from "./AccountSidebar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";
import ConnectModal from "./ConnectModal";

const navLinks = [
  {
    label: "Create Event",
    to: "create-event",
    icon: "/assets/event.svg",
  },
  {
    label: "Your Events",
    to: "your-events",
    icon: "/assets/event.svg",
  },
  {
    label: "All Events",
    to: "events",
    icon: "/assets/community.svg",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  function onConnect() {
    setIsOpen((prev) => !prev);
    if (isToggle) setIsToggle(false);
  }

  function onToggleNav() {
    setIsToggle((prev) => !prev);
  }

  function onDisconnect() {
    disconnect();
    if (isToggle) setIsToggle(false);
    router.push("/");
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="pt-[35px] px-[65px] w-full">
      <div
        className={`flex justify-between items-center py-2 px-4 rounded-full text-sm lg:text-base leading-5 text-white bg-[#1E1D1D]`}
      >
        {isOpen &&
          createPortal(<ConnectModal setIsOpen={setIsOpen} />, document.body)}

        {showSidebar && (
          <AnimatePresence>
            <AccountSidebar
              closeFunc={toggleSidebar}
              userAddr={address
                ?.slice(0, 6)
                .concat("...")
                .concat(address?.slice(-4))}
              disconnectFunc={onDisconnect}
            />
          </AnimatePresence>
        )}

        {/* Burger menu icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={onToggleNav}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
          >
            <Image
              src={`${isToggle ? "/assets/close.png" : "/assets/burger.svg"}`}
              width={30}
              height={30}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Desktop navigation */}
        <Logo />
        <ul className="gap-x-[55px] items-center lg:flex hidden">
          {navLinks.map((link, i) => (
            <Link href={link.to} key={i}>
              <li className="flex justify-center whitespace-nowrap items-center gap-x-2">
                <Image
                  src={link.icon}
                  alt="event logo"
                  className="h-6 w-6"
                  width={30}
                  height={30}
                />
                <span>{link.label}</span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Connect/Disconnect Wallet button */}
        {!address ? (
          <button
            className="py-2 lg:py-3 px-5 lg:px-[18px] bg-[#C4C4C433] rounded-full text-white font-medium text-sm leading-[18px] w-[166px] text-center"
            onClick={onConnect}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="flex items-center gap-x-[10px] py-2 lg:py-3 px-5 lg:px-[18px] bg-[#C4C4C433] rounded-full text-white font-medium text-sm leading-[18px] w-[166px] text-center"
            onClick={toggleSidebar}
          >
            <Image
              src="/assets/argentLogo.svg"
              className="lg:h-[18px] h-5 w-5 lg:w-[18px]"
              alt=""
              width={18}
              height={18}
            />
            <span>
              {address?.slice(0, 6).concat("...").concat(address?.slice(-4))}
            </span>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
