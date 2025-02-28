'use client'

import React from "react";
import Navbar from "../../components/Navbar"
// import Location from "../../assets/location.svg";
// import Globe from "../../assets/globeImg.svg";
// import Time from "../../assets/timeImg.svg";
// import ProfileImage from "../../assets/profileImg.png";
// import EventImage from "../../assets/eventImage.png";
import Footer from "../../components/Footer";
import Image from "next/image";


// Event Card Component
const EventCard = ({ title, presenter, address, location, time }) => {
    return (
      <div className="p-4 flex flex-col items-start w-full">
        {/* Image and Content */}
        <div className="flex items-start space-x-2">
          {/* Event Image */}
          <Image src={'/assets/eventImage.png'} alt="Event" className="w-20 h-20 rounded-sm" width={30} height={30}/>
  
          {/* Event Details */}
          <div className="mt-2">
            {/* Title */}
            <h4 className="font-bold text-sm md:text-md">{title}</h4>
  
            {/* Presenter */}
            <div className="flex items-center mt-2">
              <Image
                src={'/assets/profileImg.png'}
                alt="Presenter Icon"
                className="mr-2 w-5 h-5 md:w-5 md:h-5"
                width={50} height={50}
              />
              <p className="text-xs md:text-[14px]">{presenter}</p>
            </div>
  
            {/* Location, Time, and Address */}
            <div className="flex flex-col mt-2 gap-y-1 md:flex-row md:gap-x-4 md:items-center">
              {/* For Mobile: Address in its own row */}
              <div className="flex items-center md:order-1">
                <Image src={'/assets/location.svg'} alt="Address Icon" className="mr-2 w-3 h-3 md:w-4" width={30} height={30}/>
                <p className="text-xs md:text-[14px]">{address}</p>
              </div>
  
              {/* For Mobile: Location and Time on the same row */}
              <div className="flex items-center justify-start gap-x-2 md:order-2">
                <div className="flex items-center">
                  <Image src={'/assets/globeImg.svg'} alt="Location Icon" className="mr-2 w-3 h-3 md:w-4" width={30} height={30}/>
                  <p className="text-xs md:text-[14px]">{location}</p>
                </div>
                <div className="flex items-center">
                  <Image src={'/assets/timeImg.svg'} alt="Time Icon" className="mr-2 w-3 h-3 md:w-4" width={30} height={30}/>
                  <p className="text-xs md:text-[14px]">{time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  
const ProfilePage = () => {
  const pastEvents = [
    {
      title: "Workshop: Leveraging The Graph to build Your Dapp",
      presenter: "Flames and Fire",
      address: "Colab Innovation Campus",
      location: "Lagos, Nigeria",
      time: "10:00 AM",
    },
    {
      title: "Workshop: Leveraging The Graph to build Your Dapp",
      presenter: "Flames and Fire",
      address: "Colab Innovation Campus",
      location: "Lagos, Nigeria",
      time: "10:00 AM",
    },
    {
      title: "Workshop: Leveraging The Graph to build Your Dapp",
      presenter: "Flames and Fire",
      address: "Colab Innovation Campus",
      location: "Lagos, Nigeria",
      time: "10:00 AM",
    },
  ];

  return (
    <div className="bg-primaryBackground bg-[#1E1D1D] text-white min-h-screen">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Card Section */}
        <div className="bg-[#1E1D1D] px-6 py-6 border border-gray-400 rounded-[4px] w-full max-w-sm lg:max-w-[740px]">
          <div className="flex items-center space-x-4">
            {/* Profile Section */}
            <Image
              src={'/assets/profileImg.png'}
              alt="Profile"
              className="rounded-full w-16 h-16"
              width={30} height={30}
            />
            <div className="space-y-2">
              <h2 className="font-normal text-sm md:text-lg">TeamINFURA</h2>
              <p className="text-[#D9D9D9CC] text-xs md:text-[14px] truncate">0x7690900009VYGYFT99</p>
              {/* Hosted and Attended */}
              <div className="flex space-x-6 mt-2">
                <p className="font-thin text-xs md:text-[14px]">
                  <span className="font-bold text-white">5</span> Hosted
                </p>
                <p className="font-thin text-xs md:text-[14px]">
                  <span className="font-bold text-white">24</span> Attended
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Event Card Section */}
        <div className="w-full max-w-sm lg:max-w-[740px] mb-20 py-6">
          <h3 className="text-base font-bold md:text-[16px]">Past Events</h3>
          <p className="text-xs md:text-[12px] mb-5 text-[#D9D9D9CC]">Your past events</p>
          <div className="bg-[#1E1D1D] border border-gray-400 rounded-[4px] px-4 py-2 mt-3">
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <React.Fragment key={index}>
                  <EventCard
                    title={event.title}
                    presenter={event.presenter}
                    address={event.address}
                    location={event.location}
                    time={event.time}
                  />
                  {index < pastEvents.length - 1 && (
                    <div className="border-b border-[#706c61] opacity-25 my-4"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default ProfilePage;
