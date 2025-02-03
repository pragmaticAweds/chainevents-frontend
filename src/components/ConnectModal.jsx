"use client";
import { useConnect } from "@starknet-react/core";

const ConnectModal = ({ setIsOpen }) => {
  const { connect, connectors } = useConnect();

  return (
    <div
      className="absolute inset-0 bg-white bg-opacity-65 backdrop-blur-sm flex gap-x-4 justify-center pt-[400px] z-[100]"
      onClick={() => setIsOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex gap-x-4">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => {
              connect({ connector });
              setIsOpen(false);
            }}
            className="border border-black rounded-md text-black font-regular py-2 px-4  h-fit capitalize shadow-md"
          >
            Connect {connector.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectModal;
