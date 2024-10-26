/* eslint-disable react/prop-types */
import XIcon from "../icons/XIcon";
import { timezones } from "../utils/data";

export default function DateMobilePicker({
  setOpen,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  stopDate,
  setStopDate,
  stopTime,
  setStopTime,
  selectedTimezone,
  setSelectedTimezone,
}) {
  return (
    <div className="absolute inset-0 flex justify-center pt-[150px] bg-black bg-opacity-80 z-[30] backdrop-blur-sm px-6">
      <div className="p-[34px] pb-[66px] border-[0.4px] rounded-[10px] border-[#F5DB95CC] flex flex-col relative h-fit bg-[#1E1D1D] text-[#D9D9D9] w-full font-normal">
        <button
          className="absolute top-4 right-4 rounded-full w-5 h-5 bg-[#D9D9D9] text-black flex justify-center items-center"
          onClick={() => {
            console.log("close date picker");
            setOpen(false);
          }}
        >
          <XIcon />
        </button>
        <h3 className="flex items-center gap-x-1 justify-center pb-5 mb-[34px] border-b-[#C3B07A] border-b-[0.5px] w-[80%] mx-auto text-base leading-5">
          Event Time
        </h3>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Start</h3>
          <div className="grid grid-cols-2 gap-x-1 text-white text-xs font-normal">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-[4px_0_0_4px] bg-transparent py-[14px] px-4 text-white border-[0.1px] border-[#C4C4C4]"
            />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="rounded-[0_4px_4px_0px] bg-transparent py-[14px] px-4 text-white border-[0.1px] border-[#C4C4C4]"
            />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">End</h3>
          <div className="grid grid-cols-2 gap-x-1 text-white text-xs font-normal">
            <input
              type="date"
              value={stopDate}
              onChange={(e) => setStopDate(e.target.value)}
              className="rounded-[4px_0_0_4px] bg-transparent py-[14px] px-4 text-white border-[0.1px] border-[#C4C4C4]"
            />
            <input
              type="time"
              value={stopTime}
              onChange={(e) => setStopTime(e.target.value)}
              className="rounded-[0_4px_4px_0px] bg-transparent py-[14px] px-4 text-white border-[0.1px] border-[#C4C4C4]"
            />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Timezone</h3>
          <select
            id="timezone"
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
            className="w-full h-full cursor-pointer bg-transparent text-white py-[14px] px-4 border-[0.1px] border-[#C4C4C4] text-xs"
          >
            {timezones.map((timezone) => (
              <option
                key={timezone.value}
                value={timezone.value}
                className=" h-full w-full"
              >
                {timezone.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
