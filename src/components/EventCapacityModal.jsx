import React, { useState } from "react";
import { PiBarn } from "react-icons/pi";

const MaxCapacityModal = ({ isOpen, onClose }) => {
  const [capacity, setCapacity] = useState(50);
  const [waitlistEnabled, setWaitlistEnabled] = useState(false);

  const handleSetLimit = () => {
    console.log("Capacity Set:", capacity);
    console.log("Waitlist Enabled:", waitlistEnabled);
    onClose(); 
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#1E1D1D] text-white p-6 rounded-lg shadow-lg w-[350px]">
          <PiBarn  className="text-yellow-600" />
          <h2 className="text-lg font-bold mb-4">Max Capacity</h2>
          <p className="text-sm mb-4">
            Auto-close registration when the capacity is reached. Only approved
            guests count toward the cap.
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="capacity">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full p-2 rounded border border-gray-600 bg-gray-300 text-gray-900"
            />
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label htmlFor="waitlist" className="text-sm mr-4">
              Over capacity waitlist
            </label>
            <div
              className="relative inline-block w-12 h-5 align-middle select-none transition duration-200 ease-in mr-2"
              onClick={() => setWaitlistEnabled(!waitlistEnabled)}
            >
              <div
                className={`absolute w-full h-full rounded-full cursor-pointer transition-colors duration-300 ${waitlistEnabled ? 'bg-green-500' : 'bg-gray-500'
                  }`}
              ></div>
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${waitlistEnabled ? 'translate-x-7' : 'translate-x-0'
                  }`}
              ></div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="bg-white px-6 py-3 rounded-lg text-gray-900 text-base font-semibold shadow-md border border-gray-300 hover:bg-gray-200"
              onClick={handleSetLimit}
            >
              Set Limit
            </button>
            <button
              className="bg-gray-300 px-6 py-3 rounded-lg text-gray-900 text-base font-semibold shadow-md border border-gray-400 hover:bg-gray-400"
              onClick={onClose}
            >
              Remove Limit
            </button>
          </div>

        </div>
      </div>
    )
  );
};

export default MaxCapacityModal;
