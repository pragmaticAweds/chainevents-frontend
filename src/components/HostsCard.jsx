import React from "react";
import Button from "./Button";
import writeIcon from "../assets/tabler_edit.svg";
import editIcon from "../assets/editIcon.svg";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const HostsCard = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="my-3">Hosts</h3>
                    <div className="w-[10%]">
                        <Button bgColor="#D4D4D4">
                            <img src={writeIcon} alt="write-icon" />
                        </Button>
                    </div>
                </div>
                <h4 className="text-[#D9D9D9CC] text-sm">
                    Add hosts, special guests, and event managers.
                </h4>
            </div>
            <div className="mt-5 border border-white rounded p-5">
                <HostLine
                    pillText="Creator"
                    pillType="green"
                    hostLineImg={avatar1}
                />
                <HostLine
                    pillText="Manager"
                    pillType="yellow"
                    hostLineImg={avatar2}
                />
                <HostLine
                    pillText="Manager"
                    pillType="yellow"
                    hostLineImg={avatar3}
                />
            </div>
        </div>
    );
};

const HostLine = ({ pillText, hostLineImg, pillType }) => {
    return (
        <>
            <div className="flex justify-between my-3">
                <div className="flex space-x-3 items-center">
                    <img src={hostLineImg} alt="hostlineimage" />
                    <p>Teaminfuralegend </p>
                    <p className="text-sm text-[#D9D9D9CC]">
                        taminfuraweb3@gmail.com
                    </p>
                    <span
                        className={
                            pillType == "green"
                                ? `bg-[#34C75966] text-xs text-[#83F7A0] inline-block px-6 py-2 rounded-[100px]`
                                : `bg-[#FFD3594D] text-xs text-[#FFD359] inline-block px-6 py-2 rounded-[100px]`
                        }
                    >
                        {pillText}
                    </span>
                </div>
                <button>
                    <img src={editIcon} alt="edit-icon" />
                </button>
            </div>
            <hr />
        </>
    );
};
export default HostsCard;
