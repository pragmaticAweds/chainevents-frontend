/* eslint-disable react/prop-types */
import { useState } from "react";
import argent from "../assets/argentLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { createPortal } from "react-dom";

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
  const [displayAddress, setDisplayAddress] = useState(true);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  function onConnect() {
    setIsOpen((prev) => !prev);
  }

  function onDisconnect() {
    disconnect();
    navigate("/");
  }
  return (
    <div
      className={`${classes} flex justify-between items-center py-5 px-5 lg:px-[80px] text-sm lg:text-base leading-5 text-white`}
    >
      {isOpen &&
        createPortal(<ConnectModal setIsOpen={setIsOpen} />, document.body)}
      <Link to="/" className="font-extrabold ">
        STARKEVENTS
      </Link>
      <ul className="gap-x-[60px] items-center lg:flex hidden">
        <li className="flex gap-x-2 items-center">
          <Link to={"/create-event"}>Create Event</Link>
        </li>
        <li className="flex gap-x-2 items-center">Your Events</li>
        <li className="flex gap-x-2 items-center">Communities</li>
        <li className="flex gap-x-2 items-center">Calendars</li>
      </ul>
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
          onMouseEnter={() => setDisplayAddress(false)}
          onMouseLeave={() => setDisplayAddress(true)}
          onClick={onDisconnect}
        >
          {!displayAddress ? (
            "Disconnect Wallet"
          ) : (
            <>
              <img
                src={argent}
                className="lg:h-[24px] h-5 w-5 lg:w-[24px]"
                alt=""
              />
              <span>
                {address?.slice(0, 6).concat("...").concat(address?.slice(-4))}
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default Navbar;
