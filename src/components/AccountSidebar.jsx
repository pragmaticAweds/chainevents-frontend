"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AccountSidebar = ({ closeFunc, userAddr, disconnectFunc }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-[#1E1D1D] absolute h-[100vh] top-0 right-0 w-[330px] p-5 z-[200]"
      onClick={closeFunc}
    >
      <div>
        <div className="border border-1 rounded-[8px] border-[#C3B07A]">
          <div className="flex text-xs justify-between px-2 py-5">
            <div className="flex space-x-1 items-center">
              <img src="/assets/purse.png" alt="purse icon" className="block" />
              <Image src="/assets/purse.png" width={16} height={16} alt="#" />
              <p>Change wallet</p>
            </div>
            <button
              className="flex space-x-1 items-center"
              onClick={disconnectFunc}
            >
              {/* <img src={disconnect} alt="disconnect icon" className="block" /> */}
              <Image
                src="/assets/disconnect.png"
                alt="#"
                width={30}
                height={30}
              />
              <span>Disconnect wallet</span>
            </button>
          </div>
          <div className="px-5 text-[#C3B07A]">
            <hr className="border-t-[1px] border-[#C3B07A] w-full" />
          </div>
          <div
            className="flex space-x-1 px-2 py-5 cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <Image
              src={"/assets/iconAvatar.png"}
              alt="#"
              width={30}
              height={30}
            />
            <div className="text-sm flex flex-col space-y-1 items-start">
              <p className="block text-[#C3B07A]">Team INFURA</p>
              <p className="block">{userAddr}</p>
            </div>
          </div>
        </div>
        <div className="px-2 mt-5 flex items-start flex-col">
          <h3 className="text-xs my-2 ml-0">Your Activities</h3>
          <hr className="border-t-[1px] border-[#C3B07A] w-full" />
          <p className="text-[#C3B07A]">
            <span className="text-white">51 </span> Hosted
          </p>
          <p className="text-[#C3B07A]">
            <span className="text-white">24 </span> Attended
          </p>
        </div>
      </div>
    </motion.div>
  );
};
