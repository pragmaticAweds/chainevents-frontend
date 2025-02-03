import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

function AppLayout({ children }) {
  return (
    <main className="min-h-[100vh] overflow-auto bg-primaryBackground bg-[#1E1D1D] w-[100vw]">
      <Navbar />
      <div className="py-[23px] px-6 lg:px-[73px] grid grid-cols-1 lg:grid-cols-[258px_1fr] gap-x-7 w-[100%]">
        <Sidebar />
        <div className="pb-10">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default AppLayout;
