import React from "react";
// import '/assets/eventImage.png' from "../assets/eventImage.pngwidth={30} height={30}";
// import copyIcon from "../assets/copy-link.svg";
// import time from "../assets/time.svg";
// import location from "../assets/location.svg";
// import editEvent from "../assets/tabler_edit.svg";
// import approvePart from "../assets/mdi_tag-approve.svg";
// import whatsapp from "../assets/whatsapp.svg";
// import twitter from "../assets/new-twitter.png";
// import facebook from "../assets/facebook-02.svg";
// import linkedin from "../assets/linkedin-02.svg";
import Button from "./Button";
import Image from "next/image";

const EventCard = () => {
    return (
        <div className="w-full border border-white p-5">
            <div className="flex ">
                <div className="flex flex-col space-y-12 w-[60%]">
                    <img src={'/assets/eventImage.png'} alt="event image" width={400} height={400}/>
                    <div className="mt-4 text-center bg-[#4b4b4b] flex justify-between px-5 py-3">
                        <div className="flex">
                            <span>Chain.Events/740937390</span>
                            <Image src={'/assets/copy-link.svg'} alt="copy-icon" width={20} height={20}/>
                        </div>
                        <p>Copy</p>
                    </div>
                </div>
                <div className="px-12 w-full">
                    <h1 className="font-bold">Location and Time</h1>
                    <div className="flex space-x-3 mt-5">
                        <Image src={'/assets/location.svg'} alt="location" width={30} height={30}/>
                        <div>
                            <h2 className="">Colab Innovation Campus</h2>
                            <h3 className="text-sm text-[#D9D9D9]">
                                No, 1 Technology City Boulevard/Crocodile road
                            </h3>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <Image src={'/assets/time.svg'} alt="time" width={30} height={30}/>
                        <div>
                            <h2 className="">Friday, Sep 6</h2>
                            <h3 className="text-sm text-[#D9D9D9]">
                                10:00 AM - 12:00 PM GMT +1
                            </h3>
                        </div>
                    </div>
                    <p className="my-12 text-xs">
                        This Address will be visible on the Your events page
                    </p>
                    <div className="flex space-x-5 mt-12 w-full">
                        <Button bgColor="#D9D9D9">
                            <Image src={'/assets/mdi_tag-approve.svg'} alt="" className="inline" width={30} height={30}/>
                            <span className="text-xs text-black">
                                Approve Participants
                            </span>
                        </Button>
                        <Button bgColor="#D9D9D9">
                            <Image src={'/assets/tabler_edit.svg'} alt="" className="inline" width={30} height={30}/>
                            <span className="text-xs text-black">
                                Edit Event
                            </span>
                        </Button>
                    </div>
                    <div className="flex justify-between mt-12 w-[92%]">
                        <p>Share Event</p>
                        <div className="flex space-x-2">
                            <Image src={'/assets/facebook-02.svg'} alt="facebook" width={30} height={30}/>
                            <Image src={'/assets/linkedin-02.svg'} alt="linkedin" width={30} height={30}/>
                            <Image src={'/assets/new-twitter.png'} alt="twitter" width={30} height={30}/>
                            <Image src={'/assets/whatsapp.svg'} alt="whatsapp" width={30} height={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
