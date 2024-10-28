import { useState } from "react";
import GenericModal from "../components/GenericModal";
import Navbar from "../components/Navbar";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useAccount } from "@starknet-react/core";
import Footer from "../components/Footer";
import chainImg from "../assets/chainevtlogo.svg";
import calender from "../assets/calendar-02.svg";
import addCircle from "../assets/add-circle.svg";

function HomePage() {
  const [username, setUsername] = useState("");
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const navigate = useNavigate();
  const { address } = useAccount();

  return (
    <div className="text-white h-full overflow-x-hidden flex flex-col items-center text-center relative min-h-[100vh] bg-primaryBackground bg-[#1E1D1D]">
      {nameModalOpen &&
        createPortal(
          <GenericModal
            title={"We want to know your name"}
            mainInfo={
              "Type in your username, It doesn't have to be your real name.  You can change the username anytime"
            }
          >
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 border-[1px] block w-full mt-6 bg-[#D9D9D9] mb-6 border-[#C4C4C4]"
            />
            <button
              className="text-sm py-[16px] w-[218px] rounded-[5px] font-medium text-white bg-[#C6304F]"
              onClick={() => {
                if (!username) {
                  return;
                }
                setNameModalOpen(false);
                setWelcomeModalOpen(true);
              }}
            >
              Continue
            </button>
          </GenericModal>,
          document.body
        )}
      {welcomeModalOpen &&
        createPortal(
          <GenericModal
            title={"Welcome"}
            mainInfo={`Welcome @${username}, now you can explore Starkevents and create and attend events`}
          >
            <button
              className="text-sm py-[16px] w-[218px] rounded-[5px] font-medium text-white bg-[#C6304F] mt-[31px]"
              onClick={() => {
                navigate("app/home");
              }}
            >
              Continue
            </button>
          </GenericModal>,
          document.body
        )}
      <Navbar classes="absolute top-0 left-0 right-0" />
      {!address && (
        <div className="mt-56 mx-5 ">
          <h1 className="lg:text-[96px] sm:text-[60px] text-[40px] leading-[60px] font-black mb-[27px]">
            Next-Gen Ticketing <br />
            <span className="lg:text-[40px] sm:text-[30px] text-[20px] font-medium">
              Secure and Decentralized on StarkNet
            </span>
          </h1>
          <p className="text-base flex flex-wrap leading-6 font-medium mb-[43px] w-[819px]">
            Discover the future of ticketing on StarkNet. Enjoy fraud-resistant,
            transparent, and decentralized ticketing solutions that provide
            peace of mind and ease of use for every event. Step into the future
            with us
          </p>
        </div>
      )}

      {address && (
        <>
          <div className=" z-10 md:hidden block mt-24 font-bold">
            <div className="flex justify-center items-center">
              <img src={chainImg} alt="chain event logo" />
              <h2 className="text-lg font-bold">CHAINEVENTS</h2>
            </div>
            <h1 className="text-[1.75rem] font-bold">
              Own Your Tickets, <br />
              <span className=" text-[#83F7A0] ">Enhance Your Experience</span>
            </h1>
          </div>

          <div className=" flex flex-col bg-[#1E1D1D] border pt-5 mt-8 sm:mt-16 md:mt-32 rounded pb-10 px-16 md:px-44 sm:px-28  border-white justify-center items-center text-center">
            <div className=" mb-9 hidden md:block">
              <div className="flex justify-center mb-3 items-center">
                <img src={chainImg} alt="chain event logo" />
                <h2 className="text-lg font-bold">CHAINEVENTS</h2>
              </div>
              <h1 className="text-[1.75rem] font-bold">
                Own Your Tickets, <br />
                <span className=" text-[#83F7A0] ">
                  Enhance Your Experience
                </span>
              </h1>
            </div>

            <img src={calender} alt="image" />

            <p className=" mt-5 mb-8">
              You have no current event <br />
              <span className="font-semibold">Host one</span>
            </p>

            <Link to={"/create-event"} className="">
              <div className="flex border border-white bg-black py-[18px] gap-3 px-[40px] sm:px-[69px] rounded-[5px] text-base font-medium justify-center items-center">
                <img src={addCircle} alt="image" />
                <span> Create Event</span>
              </div>
            </Link>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default HomePage;
