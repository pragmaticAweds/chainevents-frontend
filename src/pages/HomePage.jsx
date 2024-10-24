import { useState } from "react";
import GenericModal from "../components/GenericModal";
import Navbar from "../components/Navbar";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet } from "../api/ConnectAPI";
import { connect } from "get-starknet";

function HomePage() {
  const [username, setUsername] = useState("");
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const navigate = useNavigate();
  const { connection, dispatch } = useConnectWallet();

  async function onConnect() {
    await connectWallet(dispatch, connect);
  }

  return (
    <div className="pt-[267px] text-white bg-[#333] h-full flex flex-col items-center text-center relative min-h-[100vh]">
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
      <h1 className="text-[96px] leading-[60px] font-black mb-[27px]">
        Next-Gen Ticketing <br />
        <span className="text-[40px] font-medium">
          Secure and Decentralized on StarkNet
        </span>
      </h1>
      <p className="text-base leading-6 font-medium mb-[43px] w-[819px]">
        Discover the future of ticketing on StarkNet. Enjoy fraud-resistant,
        transparent, and decentralized ticketing solutions that provide peace of
        mind and ease of use for every event. Step into the future with us
      </p>
      {connection?.isConnected ? (
        <button
          className="bg-black py-[18px] px-[69px] rounded-[5px] text-base font-medium"
          onClick={() => setNameModalOpen(true)}
        >
          Create your Event
        </button>
      ) : (
        <button
          className="bg-black py-[18px] px-[69px] rounded-[5px] text-base font-medium"
          onClick={onConnect}
        >
          connect wallet
        </button>
      )}
    </div>
  );
}

export default HomePage;
