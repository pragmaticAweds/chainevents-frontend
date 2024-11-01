<<<<<<< HEAD
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
=======
// eslint-disable-next-line no-unused-vars
import React from "react";
import whatsapp from "../assets/whatsapp.svg";
import x from "../assets/x.svg";
import discord from "../assets/discord.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" absolute bottom-2 w-full px-5 lg:px-[80px]">
      <hr />
      <div className="flex justify-between my-2 sm:my-4 items-center">
        <h1>STARKEVENTS</h1>
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
>>>>>>> main
};

export default Footer;
