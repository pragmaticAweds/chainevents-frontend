import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="min-h-[100vh] overflow-auto bg-primaryBackground bg-[#1E1D1D]">
      <Navbar />
      <div className="py-[23px] px-[73px] grid grid-cols-[258px_1fr] gap-x-7">
        <Sidebar />
        <div className="pb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
