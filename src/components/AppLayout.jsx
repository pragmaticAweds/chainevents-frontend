import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="min-h-[100vh] overflow-auto bg-primaryBackground bg-[#1E1D1D] w-[100vw]">
      <Navbar />
      <div className="py-[23px] px-6 lg:px-[73px] grid grid-cols-1 lg:grid-cols-[258px_1fr] gap-x-7 w-[100%]">
        <Sidebar />
        <div className="pb-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
