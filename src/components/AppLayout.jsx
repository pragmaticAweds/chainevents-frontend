import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useConnectWallet } from "../context/ConnectContext";
import { useEffect } from "react";

function AppLayout() {
  const { connection } = useConnectWallet();
  const navigate = useNavigate();
  useEffect(() => {
    if (!connection) {
      navigate("/");
      return;
    }
  }, [connection, navigate]);

  if (!connection) {
    navigate("/");
    return;
  }
  return (
    <div className="max-h-[100vh] h-[100vh] overflow-hidden">
      <Navbar />
      <div className="py-[23px] px-[73px] grid grid-cols-[258px_1fr] gap-x-7 bg-[#CA2F4A]">
        <Sidebar />
        <div className="overflow-scroll h-[90vh] pb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
