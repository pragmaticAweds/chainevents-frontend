import React from "react";
// import addTeam from "../assets/add-team.svg";
// import share from "../assets/share-08.svg";
// import avatar1 from "/assets/avatar1.png";
// import avatar2 from "/assets/avatar2.png";
// import avatar3 from "/assets/avatar3.png";
import Image from "next/image";

const avatars = [
    '/assets/avatar1.png',
    '/assets/avatar2.png',
    '/assets/avatar3.png',
    '/assets/avatar3.png',
    '/assets/avatar3.png',
    '/assets/avatar3.png',
    '/assets/avatar3.png',
    '/assets/avatar3.png',
    ,
    '/assets/avatar3.png',
    ,
    '/assets/avatar3.png',
    ,
    '/assets/avatar3.png',
    ,
    '/assets/avatar3.png',
    ,
    '/assets/avatar3.png',
];

const Participants = () => {
    return (
        <div className="w-[80%] mx-auto ">
            <div className="w-full flex space-x-5 mt-12">
                <Button bgColor="#1E1D1D">
                    <span>Invite Participants</span>
                    <Image src={'/assets/add-team.svg'} alt="" className="ml-2 inline" width={30} height={30}/>
                </Button>
                <Button bgColor="#1E1D1D">
                    <span>Share Event</span>
                    <Image src={'/assets/share-08.svg'} alt="" className="ml-2 inline" width={30} height={30}/>
                </Button>
            </div>
            <div>
                <h1>Participants </h1>
                <div className="text-[#34C759]">
                    <h3 className="font-bold">
                        22{" "}
                        <span className="text-sm font-normal">
                            Participants
                        </span>
                    </h3>
                    <ProgressBar progress={100} />
                    <span className="text-sm">22 Going</span>
                </div>
            </div>
            <div>
                <p className="my-3">Participants</p>
                <SearchButton />
                <div className="mt-5 border border-white rounded p-5">
                    {avatars.map((avatar, index) => (
                        <SearchItem hostLineImg={avatar} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Button = ({ children, bgColor }) => {
    return (
        <button
            className={`w-full py-[12px] text-center bg-[${bgColor}] text-sm`}
        >
            {children}
        </button>
    );
};

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-[100%] h-[6px] bg-[#34C759] rounded-full overflow-hidden">
            <div
                className="h-full bg-custom-green rounded-tl-full transition-all ease-linear"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

const SearchButton = () => {
    return (
        <button className="flex items-center w-full h-[48px] bg-[#1E1D1D] text-[#D9D9D9] rounded-md px-2 py-[13px] border border-gray-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17.65 10a7.65 7.65 0 11-15.3 0 7.65 7.65 0 1115.3 0z"
                />
            </svg>
            <span className="text-gray-500">Search</span>
        </button>
    );
};

const SearchItem = ({ hostLineImg }) => {
    return (
        <>
            <div className="flex justify-between my-3 text-white">
                <div className="flex space-x-3 items-center">
                    <Image src={hostLineImg} alt="hostlineimage" width={30} height={30} />
                    <p>Teaminfuralegend </p>
                    <p className="text-sm text-[#D9D9D9CC]">
                        taminfuraweb3@gmail.com
                    </p>
                </div>
                <div className="flex space-x-3">
                    <span className="bg-[#34C75966] text-xs text-[#83F7A0] inline-block px-6 py-2 rounded-[100px]">
                        Going
                    </span>
                    <span className="text-sm text-[#D9D9D9CC]">Sep 6</span>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Participants;
