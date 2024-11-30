import React from "react";
import { PiBarn } from "react-icons/pi";

const AddQuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1E1D1D] rounded-lg shadow-lg p-6 w-[400px]">
      <PiBarn  className="text-yellow-600" />
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Add Question</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-400 mt-2">
          Ask guests custom questions when they register.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Text
          </button>
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Option
          </button>
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Social profile
          </button>
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Company
          </button>
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Checkbox
          </button>
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Terms
          </button>
          <button className="bg-[#D7D7D7] hover:bg-gray-400 text-gray-600 font-medium py-2 px-4 rounded">
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
