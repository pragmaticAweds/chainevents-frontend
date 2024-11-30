import React, { useState } from "react";
import { PiTicket } from "react-icons/pi";


const NewEventType = ({ isOpen, onClose }) => {
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [requireApproval, setRequireApproval] = useState(false);

  const handleCreateTicketType = () => {
    console.log("Ticket Price:", ticketPrice);
    console.log("Ticket Type:", ticketType);
    console.log("Require Approval:", requireApproval);
    onClose(); 
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#1E1D1D] text-white p-6 rounded-lg shadow-lg w-[350px]">
          <PiTicket className="text-green-500" />
          <h2 className="text-lg font-bold mb-4 flex items-center">
            New Ticket Type
          </h2>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="ticketPrice"
            >
              Ticket Price
            </label>
            <div className="flex items-center bg-[#D7D7D7] rounded">
              <input
                type="number"
                id="ticketPrice"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(e.target.value)}
                className="w-full p-2 rounded-r border-l border-gray-600 bg-[#D7D7D7] text-gray-900 focus:outline-none"
                placeholder="$ Enter price"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="ticketType"
            >
              Ticket Type
            </label>
            <input 
              type="text"
              id="ticketType"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              className="w-full p-2 rounded border border-gray-600 bg-[#D7D7D7] text-gray-900 focus:outline-none"
              placeholder="Regular/VIP/VVIP"
            />
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label htmlFor="requireApproval" className="text-sm mr-4">
              Require Approval
            </label>
            <div
              className="relative inline-block w-12 h-5 align-middle select-none transition duration-200 ease-in mr-3"
              onClick={() => setRequireApproval(!requireApproval)}
            >
              <div
                className={`absolute w-full h-full rounded-full cursor-pointer transition-colors duration-300 ${requireApproval ? 'bg-green-500' : 'bg-gray-500'
                  }`}
              ></div>
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${requireApproval ? 'translate-x-7' : 'translate-x-0'
                  }`}
              ></div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-white w-full px-6 py-3 rounded text-base font-semibold text-gray-900"
              onClick={handleCreateTicketType}
            >
              Create Ticket Type
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default NewEventType;
