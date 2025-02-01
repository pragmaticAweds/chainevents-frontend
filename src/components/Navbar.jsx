'use client'

/* eslint-disable react/prop-types */
import { useState } from "react";
import argent from "../assets/argentLogo.svg";
import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { createPortal } from "react-dom";
import events from "../assets/event.svg";
import community from "../assets/community.svg";
import userSwitch from "../assets/user-switch.svg";
import burgerMenu from "../assets/burger.svg";
import closeMenu from "../assets/close.png";
import { AccountSidebar } from "./AccountSidebar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const ConnectModal = ({ setIsOpen }) => {
    const { connect, connectors } = useConnect();

    return (
        <div
            className="absolute inset-0 bg-white bg-opacity-65 backdrop-blur-sm flex gap-x-4 justify-center pt-[400px] z-[100]"
            onClick={() => setIsOpen(false)}
        >
            <div onClick={(e) => e.stopPropagation()} className="flex gap-x-4">
                {connectors.map((connector) => (
                    <button
                        key={connector.id}
                        onClick={() => {
                            connect({ connector });
                            setIsOpen(false);
                        }}
                        className="border border-black rounded-md text-black font-regular py-2 px-4  h-fit capitalize shadow-md"
                    >
                        Connect {connector.id}
                    </button>
                ))}
            </div>
        </div>
    );
};

function Navbar({ classes }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const router = useRouter()

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
        <div
            className={`${classes} flex z-20 justify-between items-center py-5 px-5 lg:px-[80px] text-sm lg:text-base leading-5 text-white`}
        >
            {isOpen &&
                createPortal(
                    <ConnectModal setIsOpen={setIsOpen} />,
                    document.body
                )}

            {/* Burger menu icon for mobile */}
            <div className="lg:hidden">
                <button
                    onClick={onToggleNav}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
                >
                    <img
                        src={`${isToggle ? closeMenu : burgerMenu}`}
                        alt="Menu"
                        className="h-6 w-6"
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <ul
                className={`${
                    isToggle ? "translate-y-[10.5rem]" : "-translate-y-full"
                } transition-transform duration-300 absolute top-68 left-0 w-full rounded bg-gradient-to-b from-[#9F8F65] to-black py-6 flex flex-col lg:hidden items-center z-10`}
            >
                <Link href={"/create-event"} onClick={onToggleNav}>
                    <li className="flex justify-center whitespace-nowrap p-5 items-center gap-x-2 ">
                        <img src={events} alt="event logo" />
                        <span>Create Event</span>
                    </li>
                </Link>
                <Link href={"/app/your-events"} onClick={onToggleNav}>
                    <li className="flex whitespace-nowrap justify-center p-5 gap-x-2 items-center">
                        <img src={events} alt="event logo" />
                        <span>Your Events</span>
                    </li>
                </Link>
                <Link href={"/"} onClick={onToggleNav}>
                    <li className="flex whitespace-nowrap justify-center p-5 gap-x-2 items-center">
                        <img src={community} alt="community logo" />
                        <span>Communities</span>
                    </li>
                </Link>
                <Link href={"/"} onClick={onToggleNav}>
                    <li className="flex whitespace-nowrap justify-center p-5 gap-x-2 items-center">
                        <img src={userSwitch} alt="calendar logo" />
                        <span>Calendars</span>
                    </li>
                </Link>
            </ul>

            {/* Desktop navigation */}
            <Link href="/" className="font-extrabold lg:flex hidden">
                STARKEVENTS
            </Link>
            <ul className="gap-x-[60px] items-center lg:flex hidden">
                <Link href={"/create-event"}>
                    <li className="flex justify-center whitespace-nowrap items-center gap-x-2">
                        <img src={events} alt="event logo" />
                        <span>Create Event</span>
                    </li>
                </Link>
                <Link href={"/"}>
                    <li className="flex whitespace-nowrap justify-center gap-x-2 items-center">
                        <img src={events} alt="event logo" />
                        <span>Your Events</span>
                    </li>
                </Link>
                <Link href={"/"}>
                    <li className="flex whitespace-nowrap justify-center gap-x-2 items-center">
                        <img src={community} alt="community logo" />
                        <span>Communities</span>
                    </li>
                </Link>
                <Link href={"/"}>
                    <li className="flex whitespace-nowrap justify-center gap-x-2 items-center">
                        <img src={userSwitch} alt="calendar logo" />
                        <span>Calendars</span>
                    </li>
                </Link>
            </ul>

            {/* Connect/Disconnect Wallet button */}
            {!address ? (
                <button
                    className="py-2 lg:py-[15px] px-5 lg:px-[32px] bg-[#1E1D1D] rounded-[4px] text-white"
                    onClick={onConnect}
                >
                    Connect Wallet
                </button>
            ) : (
                <button
                    className="flex lg:w-[203px] items-center justify-center gap-x-3 rounded-[4px] bg-white px-2 py-2 lg:py-[14px] text-center text-sm lg:text-base font-medium text-[#262626] disabled:cursor-not-allowed"
                    onClick={toggleSidebar}
                >
                    <>
                        <img
                            src={argent}
                            className="lg:h-[24px] h-5 w-5 lg:w-[24px]"
                            alt=""
                        />
                        <span>
                            {address
                                ?.slice(0, 6)
                                .concat("...")
                                .concat(address?.slice(-4))}
                        </span>
                    </>
                </button>
            )}
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
        </div>
    );
}

export default Navbar;
