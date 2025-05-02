"use client";

import Link from "next/link";
import { useAccount } from "@starknet-react/core";
import Image from "next/image";
import Pagination from "@/components/Pagination";

function HomePage() {
  const { address } = useAccount();

  return (
    <div className="text-white overflow-x-hidden flex flex-col items-center text-center">
      <main className="pt-[74px] pb-[197px]">
        {!address ? (
          <div className="mt-48 lg:mt-56 px-5 mx-auto max-w-screen-lg text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 lg:mb-8 leading-tight">
              Next-Gen Ticketing <br />
              <span className="text-2xl sm:text-4xl lg:text-5xl font-medium">
                Secure and Decentralized on StarkNet
              </span>
            </h1>
            <p className=" sm:text-base lg:text-lg font-medium leading-6 sm:leading-7 lg:leading-8 mb-8 sm:mb-10 lg:mb-12 mx-auto max-w-lg lg:max-w-3xl">
              Discover the future of ticketing on StarkNet. Enjoy
              fraud-resistant, transparent, and decentralized ticketing
              solutions that provide peace of mind and ease of use for every
              event. Step into the future with us.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col bg-[#1E1D1D] border-[.5px] border-white pt-6 rounded-[50px] pb-[67px] px-4  justify-center text-center w-[740px]">
              <div className="flex justify-center mb-4 items-center">
                <Image
                  src="/assets/chainevtlogo.svg"
                  width={50}
                  height={50}
                  alt="#"
                />
                <h2 className="text-lg leading-6 font-extrabold">
                  CHAINEVENTS
                </h2>
              </div>
              <h1 className="text-[28px] leading-[45px] font-extrabold text-white mb-2">
                Own Your Tickets, <br />
                <span className=" text-[#83F7A0] ">
                  Enhance Your Experience
                </span>
              </h1>

              <div className="space-y-4 mx-auto">
                <Image
                  src="/assets/calendar-02.svg"
                  width={200}
                  height={200}
                  alt="#"
                  className="mx-auto"
                />

                <div className="flex gap-4">
                  <Link
                    href={"/your-events"}
                    className="bg-[#3f3e3e] py-4 px-[38px] flex items-center gap-x-[10px] rounded-full text-sm leading-[18px] font-semibold border-[.5px] border-white"
                  >
                    <span>View your events</span>
                  </Link>

                  <Link
                    href={"/create-event"}
                    className="bg-black py-4 px-[38px] flex items-center gap-x-[10px] rounded-full text-sm leading-[18px] font-semibold border-[.5px] border-white"
                  >
                    <Image
                      src="/assets/add-circle.svg"
                      width={16}
                      height={16}
                      alt="#"
                    />
                    <span>Create new event</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default HomePage;
