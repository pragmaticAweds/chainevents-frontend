/* eslint-disable react/prop-types */
import { useState } from "react";
import TicketsIcon from "../icons/TicketsIcon";
import XIcon from "../icons/XIcon";

export default function SetCapacityModal({ setOpen, handleSetCapacity }) {
  const [capacity, setCapacity] = useState("");
  return (
    <div className="absolute inset-0 flex justify-center pt-[150px] bg-black bg-opacity-80 backdrop-blur-sm px-6 z-20">
      <div className="p-5 lg:p-[34px] border-[0.4px] rounded-[10px] border-[#F5DB95CC] flex flex-col relative h-fit bg-[#1E1D1D] text-[#D9D9D9] lg:w-[492px] w-full font-normal">
        <button
          className="absolute top-4 right-4 rounded-full w-5 h-5 bg-[#D9D9D9] text-black flex justify-center items-center"
          onClick={() => {
            setOpen(false);
          }}
        >
          <XIcon />
        </button>
        <h3 className="flex items-center gap-x-1 justify-center pb-2 lg:pb-5 border-b-[#C3B07A] border-b-[0.5px] w-[80%] mx-auto lg:text-base text-sm lg:leading-5">
          <TicketsIcon />
          Set your event capacity
        </h3>
        <p className="mt-4 text-xs lg:text-sm text-center mb-5">
          How many people are you going to be expecting at your event?
        </p>

        <form className="text-sm lg:text-base font-medium text-white">
          <div className="flex flex-col gap-y-2 mb-2 lg:mb-4">
            <label htmlFor="capacity">Capacity</label>
            <input
              type="text"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              className="bg-transparent p-2 lg:p-3 border-[0.3px] border-white rounded-sm outline-none"
            />
          </div>

          <div className="grid grid-cols-2 mt-5 lg:mt-10 gap-x-4 text-sm">
            <button
              className="py-2 lg:py-4 bg-[#C3B07A] rounded-sm "
              onClick={(e) => {
                e.preventDefault();
                handleSetCapacity(capacity);
              }}
            >
              Set Capacity
            </button>
            <button
              className="py-2 lg:py-4 bg-[#8080808C] rounded-sm"
              onClick={(e) => {
                e.preventDefault();
                handleSetCapacity("");
                setOpen(false);
              }}
            >
              Remove Capacity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
