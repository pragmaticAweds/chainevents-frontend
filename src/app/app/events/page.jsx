'use client'

import { useContractFetch } from "../../../utils/helpers";
import { contractAbi } from "../../../abi/abi";
import { contractAddress } from "../../../utils/address";
import Image from "next/image";
// import eventImg from "../../../assets/eventImg.jpeg";
// import avatars from "../../../assets/avatars.jpeg";
// import locationImg from "../../../assets/locationImg.svg";
// import timeImg from "../../../assets/timeImg.svg";
// import globeImg from "../../../assets/globeImg.svg";


function EventsPage() {
  //const [getEvent,setGetEvent] = useState([])

  const { data:events } = useContractFetch(
    contractAbi,
    "get_events",
    contractAddress,
    []
  );



  return (
    <div className="text-white h-full flex flex-col items-center font-semibold relative min-h-[100vh] text-xl">
      {!events?.length && "Events page Coming soon!"}

      {events?.map((eventData, index) => {
        return (
          <div
            className="p-5 w-full border border-white bg-[#1E1D1D] my-3"
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <Image src={'/assets/eventImg.jpeg'} alt="event-img" width={200} height={300}/>
                <div className="flex flex-col space-y-1">
                  <h1 className="text-[#D9D9D9]">
                    <Image src={'/assets/timeImg.svg'} alt="time-img" className="inline" width={30} height={30}/> 10:
                    00 AM
                  </h1>
                  <h1 className="text-white text-xl">{eventData.name}</h1>
                  <h1 className="text-[#D9D9D9]">
                    <Image src={'/assets/globeImg.svg'} alt="time-img" className="inline" width={30} height={30}/>{" "}
                    {eventData?.location}
                  </h1>
                  <h1 className="text-[#D9D9D9]">
                    <Image src={'/assets/locationImg.svg'} alt="time-img" className="inline" width={30} height={30}/>{" "}
                    Colab Innovation Campus
                  </h1>
                  <div className="flex space-x-3 items-center">
                    {!eventData?.is_closed && (
                      <button className="bg-[#D9D9D9] p-[10px] text-xs flex ">
                        <span>Manage Event </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 4l8 8-8 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                    {eventData?.is_closed && (
                      <button className="bg-[#34C759] p-[10px] text-white text-xs">
                        Going
                      </button>
                    )}
                    <Image src={'/assets/avatars.jpeg'} alt="avatars" width={30} height={30}/>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[90px] h-[90px] bg-[#fff] rounded-full flex flex-col items-center justify-center text-black">
                  <h1 className="font-bold text-center text-xl">AUG 24</h1>
                  <h2 className="text-center text-base">Saturday</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EventsPage;
