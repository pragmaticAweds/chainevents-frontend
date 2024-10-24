/* eslint-disable react/prop-types */
import { useState } from "react";

function CreateEventName({ setEventName }) {
  const [value, setValue] = useState("");
  return (
    <div className="bg-[#0D0C0C] rounded-[5px] h-[648px] w-full flex justify-center pt-[127px]">
      <div className="bg-white px-6 h-fit pt-4 pb-8">
        <h3 className="pb-4 text-base font-medium text-black border-b-[0.5px] border-[#C62E4A] mb-[25px]">
          Create your event
        </h3>
        <form className="flex flex-col w-[583px]">
          <label
            htmlFor="title"
            className="mb-3 text-base font-medium text-black"
          >
            Event space Title{" "}
          </label>
          <input
            type="text"
            className="p-3 bg-[#D9D9D9] border-[1px] border-[#C4C4C4] mb-10"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="mx-auto py-4 px-[69px] bg-black text-white font-medium"
            onClick={(e) => {
              e.preventDefault();
              setEventName(value);
              setValue("");
            }}
          >
            Create your Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEventName;
