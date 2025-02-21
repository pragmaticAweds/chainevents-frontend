"use client";

import Navbar from "../../components/Navbar";
import EditIcon from "../../icons/EditIcon";
import Select from "../../components/Select";
import GlobeIcon from "../../icons/GlobeIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import FileIcon from "../../icons/FileIcon";
import ApprovalIcon from "../../icons/ApprovalIcon";
import { useEffect, useState } from "react";
import UploadIcon from "../../icons/UploadIcon";
import TicketsIcon from "../../icons/TicketsIcon";
import { createPortal } from "react-dom";
import SetTicketPriceModal from "../../components/SetTicketPriceModal";
import SetCapacityModal from "../../components/SetCapacityModal";
import { timezones } from "../../utils/data";
import DateMobilePicker from "../../components/DateMobilePicker";
import { formatDisplayDate, formatTimeWithAmPm } from "../../utils/helpers";
import { contractAbi } from "../../abi/abi";
import { contractAddress } from "../../utils/address";
import { useContractWriteUtility } from "../../utils/helpers";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import LockBodyScroll from "@/components/LockBodyScroll";
import { HiChevronDown } from "react-icons/hi2";
import { createEvent } from "@/services/event/createEvent";
import { useAccount } from "@starknet-react/core";
import { toast } from "react-hot-toast";

function CreateEvent() {
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [isEditingCapacity, setIsEditingCapacity] = useState(false);
  const [mobileDatePickerIsOpen, setMobileDatePickerIsOpen] = useState(false);

  const [visibility, setVisibility] = useState("public");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [stopTime, setStopTime] = useState("");

  const [selectedTimezone, setSelectedTimezone] = useState("Africa/Lagos");

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [approved, setApproved] = useState(false);
  const [regularTicketPrice, setRegularTicketPrice] = useState("");
  const [vipTicketPrice, setVipTicketPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { address } = useAccount();

  useEffect(() => {
    const currentDate = new Date();
    const formatDate = (date) =>
      date.toISOString().slice(0, 10).replace(/-/g, "/");
    const formatTime = (date) => date.toTimeString().slice(0, 5);

    setStartDate(formatDate(currentDate));
    setStartTime(formatTime(currentDate));

    const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);
    setStopDate(formatDate(oneHourLater));
    setStopTime(formatTime(oneHourLater));
  }, []);

  const handleChangeTimezone = (e) => {
    setSelectedTimezone(e.target.value);
  };

  function handleSetPrice(regularPrice, vipPrice) {
    setRegularTicketPrice(regularPrice);
    setVipTicketPrice(vipPrice);

    setIsEditingPrice(false);
  }
  function handleSetCapacity(capacity) {
    setCapacity(capacity);
    setIsEditingCapacity(false);
  }
  const { writeAsync, isSuccess } = useContractWriteUtility(
    "add_event",
    [name, location],
    contractAbi,
    contractAddress
  );

  const submitEvent = async () => {
    // First create the event on-chain
    const tx = await writeAsync();
    
    // Create the event in the backend
    try {
      const eventData = {
        name,
        location,
        event_onchain_id: 20,
        event_owner: address,
        event_email: "unknown@gmail.com",
        event_capacity: parseInt(capacity),
      };

      const result = await createEvent(eventData);
      return result;
    } catch (error) {
      console.error('Error in submitEvent:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!address) {
      toast.error("Please connect your wallet first");
      return;
    }

    if (!name || !location || !capacity) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      const result = await submitEvent();
      console.log('Submit successful:', result);
      toast.success("Event created successfully!");
      router.push("/");
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(error.message || "Failed to create event");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return (
    <div className="text-white overflow-x-hidden flex flex-col items-center text-center bg-primaryBackground bg-[#1E1D1D]">
      <LockBodyScroll
        lock={isEditingPrice || isEditingCapacity || mobileDatePickerIsOpen}
      />
      {/* Modals */}
      {isEditingPrice &&
        createPortal(
          <SetTicketPriceModal
            setOpen={setIsEditingPrice}
            handleSetPrice={handleSetPrice}
          />,
          document.body
        )}
      {isEditingCapacity &&
        createPortal(
          <SetCapacityModal
            setOpen={setIsEditingCapacity}
            handleSetCapacity={handleSetCapacity}
          />,
          document.body
        )}
      {mobileDatePickerIsOpen &&
        createPortal(
          <DateMobilePicker
            setOpen={setMobileDatePickerIsOpen}
            startDate={startDate}
            setStartDate={setStartDate}
            startTime={startTime}
            setStartTime={setStartTime}
            stopDate={stopDate}
            setStopDate={setStopDate}
            stopTime={stopTime}
            setStopTime={setStopTime}
            selectedTimezone={selectedTimezone}
            setSelectedTimezone={setSelectedTimezone}
          />,
          document.body
        )}

      <Navbar />
      <main className="pt-[74px] pb-[197px]">
        <form onSubmit={handleSubmit} className="lg:max-w-[740px] w-full">
          <Image
            src={"/assets/testEventBanner.png"}
            className="w-full h-[302px] lg:h-[154px]"
            alt="banner"
            width={740}
            height={320}
          />

          <div className="flex justify-between items-end mt-10 w-full mb-3">
            <div className="w-4/5">
              <h3 className="text-sm lg:text-base leading-5 text-left mb-2 font-medium text-white">
                Event Name
              </h3>
              <input
                type="text"
                placeholder="Enter the name of your event"
                className="border w-full h-[40px] bg-inherit outline-none text-white px-5 rounded"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="relative">
              <div className="absolute z-10 top-[10px] left-3 text-black">
                <GlobeIcon />
              </div>
              <Select
                onChange={(e) => setVisibility(e.target.value)}
                value={visibility}
                options={[
                  {
                    label: "Public",
                    value: "public",
                  },
                  {
                    label: "Private",
                    value: "private",
                  },
                ]}
              />
              <div className="absolute z-10 top-[10px] right-3 text-black">
                <HiChevronDown />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr] lg:grid-cols-[2.3fr_1fr] gap-x-4">
            <div className="border-[0.3px] border-white p-3 rounded flex gap-x-2 items-center">
              <Image
                src={"/assets/timeline-path.svg"}
                className="h-[50px]"
                alt=""
                width={30}
                height={30}
              />
              <div className="flex-grow hidden lg:inline-block">
                <div className="w-full flex justify-between items-center mb-1">
                  <h4 className="text-sm font-semibold text-white">Start</h4>
                  <div className="flex gap-x-1 text-[#1E1D1D] text-sm font-normal">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="rounded-[4px_0_0_4px] bg-[#D9D9D9] py-2 px-4 text-[#1E1D1D]"
                    />
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="rounded-[0_4px_4px_0px] bg-[#D9D9D9] py-2 px-4 w-[100px] text-[#1E1D1D]"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h4 className="text-sm font-semibold text-white">Stop</h4>
                  <div className="flex gap-x-1 text-[#1E1D1D] text-sm font-normal">
                    <input
                      type="date"
                      value={stopDate}
                      onChange={(e) => setStopDate(e.target.value)}
                      className="rounded-[4px_0_0_4px] bg-[#D9D9D9] py-2 px-4 text-[#1E1D1D]"
                    />
                    <input
                      type="time"
                      value={stopTime}
                      onChange={(e) => setStopTime(e.target.value)}
                      className="rounded-[0_4px_4px_0px] bg-[#D9D9D9] py-2 w-[100px] px-4 text-[#1E1D1D]"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex lg:hidden flex-col"
                onClick={() => setMobileDatePickerIsOpen(true)}
              >
                <h3 className="text-sm text-[#D9D9D9] mb-[6px]">
                  {formatDisplayDate(startDate)}
                </h3>
                <h4 className="text-xs text-[#B1ACAC]">
                  {`${formatTimeWithAmPm(startTime)} - ${formatDisplayDate(
                    stopDate,
                    true
                  )} at ${formatTimeWithAmPm(stopTime)} ${
                    timezones
                      .find((tz) => tz.value === selectedTimezone)
                      ?.label.split(" - ")[1] || ""
                  }`}
                </h4>
              </div>
            </div>
            <div className="border-[0.3px]  hidden border-white py-4 px-2 rounded relative lg:flex flex-col gap-y-2 text-sm font-normal text-white bg-transparent">
              <div className="break-words pr-8 z-10 text-white">
                <h3>
                  {timezones
                    .find((tz) => tz.value === selectedTimezone)
                    ?.label.split(" - ")[0] || ""}
                </h3>
                <h3>
                  {timezones
                    .find((tz) => tz.value === selectedTimezone)
                    ?.label.split(" - ")[1] || ""}
                </h3>
              </div>

              <select
                id="timezone"
                value={selectedTimezone}
                onChange={handleChangeTimezone}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-0"
              >
                {timezones.map((timezone) => (
                  <option
                    key={timezone.value}
                    value={timezone.value}
                    className="text-black h-full w-full"
                  >
                    {timezone.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="border-[0.3px] border-white py-4 px-3 flex gap-x-2 mt-4 text-white rounded-sm">
            <MapPinIcon />
            <div className="flex-grow">
              <h3 className="text-[#D9D9D9] text-sm lg:text-base mb-1 text-left">
                Add Event Location
              </h3>
              <input
                name="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                placeholder="Offline location or virtual location"
                className="bg-transparent flex-grow border-[0.15px] w-full rounded-sm border-white p-2 text-[#B1ACAC] text-sm placeholder:text-[#D9D9D9]"
                id=""
              />
            </div>
          </div>

          <div className="border-[0.3px] border-white py-4 px-3 flex gap-x-2 mt-4 items-center text-white rounded-sm">
            <FileIcon />
            <textarea
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Add description"
              className="bg-transparent flex-grow rounded-sm border-[0.15px] border-white p-2 text-[#D9D9D9] text-sm placeholder:text-[#D9D9D9]"
              id=""
            ></textarea>
          </div>
          <div className="mt-4  text-white">
            <h3 className="mb-2 text-sm lg:text-base font-medium">
              Event Details
            </h3>
            <div className="border-[0.3px] border-white py-[14px] px-4 flex flex-col gap-x-2 items-center text-sm lg:text-base rounded-sm divide-y divide-gray-400">
              <div className="flex justify-between w-full items-center pb-3">
                <div className="flex items-center gap-x-1">
                  <ApprovalIcon />
                  <h4>Approval</h4>
                </div>

                <div
                  onClick={() => setApproved((prev) => !prev)}
                  className={`flex h-6 w-12 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 md:h-7 md:w-14 ${
                    approved ? "bg-[#35c759]" : " bg-[#D9D9D9]"
                  }`}
                >
                  <div
                    className={`h-[22px] w-[22px] transform bg-white rounded-full shadow-md transition-transform duration-300 md:h-4 md:w-4 ${
                      approved
                        ? "translate-x-5 md:translate-x-8"
                        : "translate-x-0 "
                    }`}
                  />
                </div>
              </div>
              <div className="flex justify-between w-full items-center py-3">
                <div className="flex items-center gap-x-1">
                  <UploadIcon />
                  <h4>Capacity</h4>
                </div>

                <div className="flex items-center gap-x-2">
                  {/* <h4>{!ticketPrice ? "Free" : `$${ticketPrice}`}</h4> */}
                  <div className="flex items-center gap-x-2">
                    {!capacity.length ? (
                      <h4>Unlimited</h4>
                    ) : (
                      <h4>
                        <span className="text-[#F5DB95] font-semibold">
                          Capacity:
                        </span>{" "}
                        {capacity}
                      </h4>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEditingCapacity(true);
                    }}
                  >
                    <EditIcon />
                  </button>
                </div>
              </div>
              <div className="flex justify-between w-full items-center pt-3">
                <div className="flex items-center gap-x-1">
                  <TicketsIcon />
                  <h4>Tickets</h4>
                </div>
                <div className="flex items-center gap-x-2">
                  {/* <h4>{!ticketPrice ? "Free" : `$${ticketPrice}`}</h4> */}
                  <div className="flex items-center gap-x-2">
                    {!vipTicketPrice && !regularTicketPrice && <h4>Free</h4>}
                    {vipTicketPrice && (
                      <h4>
                        <span className="text-[#F5DB95] font-semibold">
                          VIP:
                        </span>{" "}
                        ${vipTicketPrice}
                      </h4>
                    )}
                    {regularTicketPrice && (
                      <h4>
                        <span className="text-[#F5DB95] font-semibold">
                          Regular:
                        </span>{" "}
                        ${regularTicketPrice}
                      </h4>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEditingPrice(true);
                    }}
                  >
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 border-white border-[0.5px] rounded-sm text-sm lg:text-xl font-regular text-white mt-6 
              ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#000000] hover:bg-gray-900'}`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                <span>Creating event...</span>
              </div>
            ) : (
              'Create event'
            )}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default CreateEvent;
