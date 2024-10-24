/* eslint-disable react/prop-types */
import avatar from "../assets/host-avatar.svg";
function HostedStrip({ hostName }) {
  return (
    <div className="flex items-center gap-x-2">
      <img src={avatar} alt="" />
      <h3>{hostName}</h3>
    </div>
  );
}

export default HostedStrip;
