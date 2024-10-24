/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../assets/logo.jpg";
import argent from "../assets/argentLogo.svg";
import { connect, disconnect } from "get-starknet";
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";
import { useNavigate } from "react-router-dom";

function Navbar({ classes }) {
  const [displayAddress, setDisplayAddress] = useState(true);
  const { dispatch, connection, address } = useConnectWallet();
  const navigate = useNavigate();
  async function onConnect() {
    await connectWallet(dispatch, connect);
  }

  async function onDisconnect() {
    await disconnectWallet(dispatch, disconnect);
    navigate("/");
  }
  return (
    <div
      className={`${classes} flex justify-between items-center bg-black py-5 px-[80px]`}
    >
      <img src={logo} className="w-10 h-10" alt="" />
      {!connection?.isConnected ? (
        <button
          className="py-[15px] px-[42px] bg-white text-[#121212] rounded-[5px]"
          onClick={onConnect}
        >
          Connect wallet
        </button>
      ) : (
        <button
          className="flex  w-[203px] items-center justify-center gap-x-3 rounded-[4px] bg-white py-[14px] text-center text-base font-medium text-[#262626] disabled:cursor-not-allowed"
          onMouseEnter={() => setDisplayAddress(false)}
          onMouseLeave={() => setDisplayAddress(true)}
          onClick={onDisconnect}
        >
          {!displayAddress ? (
            "Disconnect Wallet"
          ) : (
            <>
              <img src={argent} className="h-[24px] w-[24px]" alt="" />
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
