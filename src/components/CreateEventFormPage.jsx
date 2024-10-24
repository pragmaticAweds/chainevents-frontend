/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import leftArr from "../assets/left-arrow.svg";
import GenericModal from "./GenericModal";

function CreateEventFormPage({ eventName, setEventName }) {
  return (
    <div className="relative bg-[#0D0C0C] w-full h-[85vh] overflow-y-scroll pt-[102px] px-[49px] pb-[56px] text-white">
      {/* {createPortal(
        <GenericModal
          title={"Publish Event"}
          mainInfo={"You’re about to publish this event"}
        >
          <div className="grid grid-cols-[1fr_1fr] gap-x-6 mt-[47px]">
            <button className="bg-[#F1EEA6] rounded-[5px] py-[9px]">
              Dont publish yet
            </button>
            <button className="bg-[#C2EBC6] rounded-[5px] py-[9px]">
              Publish Event
            </button>
          </div>
        </GenericModal>,
        document.body
      )} */}
      {/* {createPortal(
        <GenericModal
          title={"Success"}
          mainInfo={"You’re Event was published successfully"}
        >
          <div className="flex flex-col items-center gap-y-7 mt-[22px]">
            <h4 className="text-[16px] font-semibold">
              <span className="text-[#878787]">Invite link:</span>{" "}
              Starkevent/starklagosxyz.com
            </h4>
            <button className="bg-[#C6304F] text-white w-[300px] rounded-[5px] py-[9px]">
              Publish Event
            </button>
          </div>
        </GenericModal>,
        document.body
      )} */}
      <div className="absolute top-6 left-6 flex items-center gap-x-4 text-base font-medium">
        <button
          className="flex gap-x-2 items-center py-1 pr-4 border-r-[#FF4B8B] border-r-[1px]"
          onClick={() => {
            setEventName("");
          }}
        >
          <img src={leftArr} alt="" />
          Back
        </button>
        <h6>{eventName}</h6>
      </div>
      <form className="create-event-form">
        <h3 className="text-xl font-bold mb-5">Event Basics</h3>
        <div className="mb-6">
          <label htmlFor="space-title">Event space Title</label>
          <input
            type="text"
            value={eventName}
            disabled
            className="dis disabled:cursor-not-allowed"
          />
        </div>
        <div className="grid grid-cols-[1fr_1fr] mb-6 gap-x-[21px]">
          <div>
            <label htmlFor="space-title">Start date</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="space-title">End date</label>
            <input type="text" />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="event-format">Event Format</label>
          <p className="text-xs text-[#D9D9D9] mt-2 mb-4">
            The format you select will determine what information will be
            required going forward
          </p>
          <div className="flex item-center gap-x-[73px]">
            <div className="flex gap-x-4">
              <input type="radio" value="physically" className="" />
              In person
            </div>
            <div className="flex gap-x-4">
              <input type="radio" value="virtual" />
              Virtual
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="space-title">Event Tagline</label>
          <input type="text" />
          <h6 className="text-xs text-[#D9D9D9] mt-2 mb-4">
            Add a short tagline blow your event Title
          </h6>
        </div>
        <div className="mb-6">
          <label htmlFor="space-title">Add links</label>
          <input type="text" />
        </div>
        <div className="mb-6">
          <label htmlFor="space-title">Describe your event </label>
          <textarea className="w-full h-[200px] mt-3 rounded-[2px]"></textarea>
        </div>
        <div className="mb-6">
          <label>Event Banner</label>
          <div className="w-[312px] h-[141px] bg-[#D9D9D9]"></div>
          <h6 className="text-xs text-[#D9D9D9] mt-2 mb-4">Add an Image</h6>
        </div>
        <div className="mb-6">
          <label htmlFor="space-title"> Event Categories</label>
          <input type="text" />
        </div>
        <div className="mb-6">
          <label htmlFor="space-title"> Experience Level</label>
          <input type="text" />
        </div>
        <div className="mb-6">
          <label htmlFor="space-title">Event Address</label>
          <input type="text" />
        </div>
        <div className="mb-6">
          <label htmlFor="space-title">Capacity</label>
          <input type="text" />
        </div>
        <div className="mb-6">
          <label htmlFor="space-title">Location Description</label>
          <textarea className="w-full h-[200px] mt-3 rounded-[2px]"></textarea>
        </div>
        <div className="">
          <label htmlFor="space-title">Landmark</label>
          <input type="text" />
        </div>

        <div className="mt-[52px] text-base font-semibold text-white flex flex-col items-center">
          <button className="py-[15px] w-[396px] bg-white rounded-[5px] text-[#121212] mx-auto">
            Save and Edit
          </button>
          <div className="grid grid-cols-[1fr_1fr] w-full mt-[52px] gap-x-[18px]">
            <button className="py-[15px] w-full bg-[#08C51A] rounded-[5px]  mx-auto">
              Publish Event
            </button>
            <button className="py-[15px] w-full bg-[#A20029] rounded-[5px]  mx-auto">
              Delete event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateEventFormPage;
