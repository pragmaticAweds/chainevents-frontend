"use client";

import Image from "next/image";
import { useAccount } from "@starknet-react/core";
import { usePathname, useRouter } from "next/navigation";

import MissingWallet from "../../public/assets/missingWallet.svg";
// import { useEffect } from "react";
// import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { isConnected } = useAccount();
  const pathname = usePathname();
  const router = useRouter();

  //   useEffect(() => {
  //     // if (!isConnected && pathname !== "/") {
  //     //   router.replace("/");
  //     //   toast.error("Connect your wallet to continue");
  //     // }
  //   }, [isConnected, pathname, router]);

  return (
    <main>
      {!isConnected ? (
        <div className="h-screen">
          <div className="flex flex-col justify-center items-center h-[80%]">
            <Image src={MissingWallet} alt="missing-wallet" />
            <h1 className="text-3xl text-white">Please connect your wallet</h1>
          </div>
        </div>
      ) : (
        children
      )}
    </main>
  );
}
