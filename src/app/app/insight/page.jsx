'use client'

import { useState } from "react";
import TimeIcon from "../../../icons/TimeIcon";
import Image from "next/image";

function InsightPage() {
  const [time, setTime] = useState("Past 7 Days");
  const options = ["Past 7 Days", "Past 30 Days"];

  return (
    <>
      <div>
        <div className="flex flex-col gap-y-4 text-white w-[100%] lg:w-[70%] lg:ml-20">
          <div>
            <h1 className="text-3xl">
              Workshop: Leveraging The Graph to build Your Dapp
            </h1>
          </div>
          <div className="flex items-center justify-between pt-5 ">
            <div>
              <p className="text-base font-medium">Page View</p>
              <p className="text-[14px] font-noraml text-[#D9D9D9]">
                See recent page views of the event page.
              </p>
            </div>

            <div className="relative">
              <div className="absolute z-10 top-[10px] left-3 text-white">
                <TimeIcon />
              </div>
              <select
                value={time}
                onChange={(val) => setTime(val)}
                className="flex w-[150px] bg-[#717171] pl-[33px] text-white text-xs lg:text-sm font-medium cursor-pointer items-center rounded-[4px] px-3 py-2 "
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-[#1E1D1D] md:-w[739px] h-auto rounded-[14px] px-20 border-[0.4px] border-[#D9D9D9CC]">
            <div className=" w-full mt-5  ">
              <Image src={'/assets/chart.png'} className="w-full h-full" alt="chart" width={750} height={750}/>
            </div>

            <div className="grid grid-cols-3 py-10  w-full h-full">
              <div className="col-span-1 flex  flex-col">
                <p className="text-white font-bold text-[14px]">Page Views</p>

                <div className="flex items-center gap-x-5 py-5">
                  <div className="space-y-2">
                    <p className="text-[12px] text-[#D9D9D9CC]">24 hours</p>
                    <p className="text-[14px] text-white font-medium">0</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[12px] text-[#D9D9D9CC]">7 days</p>
                    <p className="text-[14px] text-white font-medium">3</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[12px] text-[#D9D9D9CC]">30 days</p>
                    <p className="text-[14px] text-white font-medium">5</p>
                  </div>
                </div>

                <div className="space-y-5 pt-6">
                  <p className="text-white font-bold text-[14px]">
                    Live Traffic
                  </p>

                  <div className="space-y-2">
                    <p className="text-white font-bold text-[12px]">
                      No page views in the last hour
                    </p>

                    <p className="text-[#D9D9D9CC] font-normal text-[12px]">
                      Start sharing your link and you’ll see live traffic here.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex justify-center">
                <div className="w-[0.4px] bg-[#C4C4C4] h-[298px]" />
              </div>

              <div className="col-span-1 flex  flex-col">
                <p className="text-white font-bold text-[14px]">Sources</p>

                <div className="flex items-center justify-between py-5">
                  <div className="space-y-1">
                    <p className="text-[14px] text-white font-medium">Cities</p>
                    <p className="text-[12px] text-[#D9D9D9CC]">
                      Abuja, Nigeria
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[14px] text-white font-medium">100%</p>
                  </div>
                </div>

                <div className="space-y-5 pt-6">
                  <p className="text-white font-bold text-[14px]">
                    UTM Sources
                  </p>

                  <p className="text-[#D9D9D9CC] font-normal text-[12px]">
                    Set up a tracking link by adding ?utm_source your-link-name
                    to your URL.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div className="h-[0.4px] bg-[#C4C4C4] w-full" />

            <div className="flex pt-5 items-center justify-between">
              <div className="space-y-4">
                <p className="text-[20px] text-white font-medium">
                  Registration Referrals
                </p>
                <p className="text-[14px] font-noraml text-[#D9D9D9CC]">
                  Each quest receives a unique referral link to invite friends.
                  See who has referred the most quests.
                </p>
              </div>
              <div className="relative">
                <div className="absolute z-10 top-[10px] left-3 text-white">
                  <TimeIcon />
                </div>
                <select
                  value={time}
                  onChange={(val) => setTime(val)}
                  className="flex sm:text-sm w-[150px] bg-[#717171] pl-[33px] text-white text-xs lg:text-sm font-medium cursor-pointer items-center rounded-[4px] px-3 py-2 "
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="py-20 flex text-center flex-col space-y-4 items-center justify-center">
            <div className="">
              <Image className="w-full h-full" src={'/assets/speaker.png'} alt="speaker" width={30} height={30}/>
            </div>
            <div className="space-y-4">
              <p className="text-[20px] text-white font-medium">No Referrals</p>
              <p className="text-[14px] font-noraml text-[#D9D9D9CC]">
                Referrals will start showing up here once guests start inviting
                their friends
              </p>
            </div>
          </div>

          <div className="py-10">
            <div className="h-[0.4px] bg-[#C4C4C4] w-full" />

            <div className="space-y-4">
              <p className="text-[20px] text-white font-medium">
                Event Feedback
              </p>
              <p className="text-[14px] font-noraml text-[#D9D9D9CC]">
                See how much your guests enjoyed the event.
              </p>
            </div>
          </div>

          <div className="py-20 flex text-center space-y-4 flex-col items-center justify-center">
            <div className="">
              <Image className="w-full h-full" src={'/assets/mail.png'} alt="speaker" width={30} height={30}/>
            </div>
            <div className="space-y-4">
              <p className="text-[20px] text-white font-medium">
                No Post-Event Email Scheduled
              </p>
              <p className="text-[14px] font-noraml text-[#D9D9D9CC]">
                To collect feedback, schedule a post-event thank you email. We
                will take care of the rest!
              </p>
              <button className=" bg-[#717171] rounded-sm p-[10px] h-auto text-xs px-5 text-center">
                Schedule Feedback Email
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="absolute my-1 w-[100%] top-40 left-0 hidden lg:block" />
    </>
  );
}

export default InsightPage;
