import React from "react";
import whatsapp from "../assets/ic_outline-whatsapp.svg";
import discord from "../assets/ic_sharp-discord.svg";
import twitter from "../assets/ri_twitter-x-fill.svg";
const Footer = () => {
    return (
        <div className="my-12 flex justify-between pt-12">
            <p className="text-[#C4C4C4] font-bold">STARKEVENTS</p>
            <div className="flex space-x-2">
                <img src={whatsapp} alt="whatsapp" />
                <img src={twitter} alt="twitter" />
                <img src={discord} alt="discord" />
            </div>
        </div>
    );
};

export default Footer;
