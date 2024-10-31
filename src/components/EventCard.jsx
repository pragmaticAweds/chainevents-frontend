import React from "react";
import eventImg from "../assets/eventImage.png";
import copyIcon from "../assets/copy-link.svg";
import time from "../assets/time.svg";
import location from "../assets/location.svg";
import editEvent from "../assets/tabler_edit.svg";
import approvePart from "../assets/mdi_tag-approve.svg";
import whatsapp from "../assets/whatsapp.svg";
import twitter from "../assets/new-twitter.png";
import facebook from "../assets/facebook-02.svg";
import linkedin from "../assets/linkedin-02.svg";
import Button from "./Button";

const EventCard = () => {
    return (
        <div className="w-full border border-white p-5">
            <div className="flex ">
                <div className="flex flex-col space-y-12 w-[60%]">
                    <img src={eventImg} alt="event image" />
                    <div className="mt-4 text-center bg-[#4b4b4b] flex justify-between px-5 py-3">
                        <div className="flex">
                            <span>Chain.Events/740937390</span>
                            <img src={copyIcon} alt="copy-icon" />
                        </div>
                        <p>Copy</p>
                    </div>
                </div>
                <div className="px-12 w-full">
                    <h1 className="font-bold">Location and Time</h1>
                    <div className="flex space-x-3 mt-5">
                        <img src={location} alt="location" />
                        <div>
                            <h2 className="">Colab Innovation Campus</h2>
                            <h3 className="text-sm text-[#D9D9D9]">
                                No, 1 Technology City Boulevard/Crocodile road
                            </h3>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <img src={time} alt="time" />
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
                            <img src={approvePart} className="inline" />
                            <span className="text-xs text-black">
                                Approve Participants
                            </span>
                        </Button>
                        <Button bgColor="#D9D9D9">
                            <img src={editEvent} className="inline" />
                            <span className="text-xs text-black">
                                Edit Event
                            </span>
                        </Button>
                    </div>
                    <div className="flex justify-between mt-12 w-[92%]">
                        <p>Share Event</p>
                        <div className="flex space-x-2">
                            <img src={facebook} alt="facebook" />
                            <img src={linkedin} alt="linkedin" />
                            <img src={twitter} alt="twitter" />
                            <img src={whatsapp} alt="whatsapp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
