// eslint-disable-next-line no-unused-vars
import React from "react";
import whatsapp from "../assets/whatsapp.svg";
import x from "../assets/x.svg";
import discord from "../assets/discord.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" absolute bottom-2 w-full px-5 lg:px-[80px]">
            <div className="h-[0.5px] bg-[#C3B07A] w-full" />

            <div className="flex justify-between my-2 sm:my-4 items-center">
                <h1 className="text-white">STARKEVENTS</h1>
                <div className=" flex justify-center items-center space-x-4">
                    <Link to={"/"}>
                        <img src={whatsapp} alt="image" />
                    </Link>
                    <Link to={"/"}>
                        <img src={x} alt="image" />
                    </Link>
                    <Link to={"/"}>
                        <img src={discord} alt="image" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
