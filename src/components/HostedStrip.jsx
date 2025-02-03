/* eslint-disable react/prop-types */
import Image from "next/image";
// import avatar from "/assets/host-avatar.svg";
function HostedStrip({ hostName }) {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={'/assets/host-avatar.svg'} alt="" width={30} height={30}/>
      <h3>{hostName}</h3>
    </div>
  );
}

export default HostedStrip;
