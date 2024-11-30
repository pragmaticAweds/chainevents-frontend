import React, { useState } from "react";
import { PiTicket } from "react-icons/pi";


const RegistrationModal = ({ isOpen, onClose }) => {
  const [acceptRegistration, setAcceptRegistration] = useState(true);

  const handleConfirm = () => {
    console.log("Accept Registration:", acceptRegistration);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#1E1D1D] text-white p-6 rounded-lg shadow-lg w-[350px]">
          <PiTicket className="text-green-500" />
          <h2 className="text-lg font-bold mb-4 flex items-center">
            Registration
          </h2>
          <p className="text-sm">
            Close registration to stop accepting new guests, including anyone
            who may have been invited.
          </p>
          <p className="text-sm">
            Please note that capacity and
            availability settings apply when registration is open.
          </p>


          <div className="flex items-center mt-4 mb-6 justify-between">
            <label htmlFor="acceptRegistration" className="text-sm mr-4">
              Accept Registration
            </label>
            <div
              className="relative inline-block w-12 h-5 align-middle select-none transition duration-200 ease-in mr-8"
              onClick={() => setAcceptRegistration(!acceptRegistration)}
            >
              <div
                className={`absolute w-full h-full rounded-full cursor-pointer transition-colors duration-300 ${acceptRegistration ? 'bg-green-500' : 'bg-gray-500'
                  }`}
              ></div>
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${acceptRegistration ? 'translate-x-7' : 'translate-x-0'
                  }`}
              ></div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-white w-full px-6 py-3 rounded text-base font-semibold text-gray-900"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RegistrationModal;
