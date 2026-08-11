import { Outlet } from "react-router-dom";

import Topbar from "./TopBar";
import Sidebar from "./SideBar";
import BottomPlayer from "./BottomPlayer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* ================= SIDEBAR ================= */}
      <aside className=" hidden lg:block fixed  left-0  top-0 bottom-0   z-50  w-[245px] ">
        <Sidebar />
      </aside>

      {/* ================= MAIN AREA ================= */}
      <div className="  min-h-screen  lg:ml-[245px] ">
        {/* ================= TOPBAR ================= */}
        <header className="  fixed   top-0  right-0   left-0  lg:left-[245px] z-40 ">
          <Topbar />
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="   min-h-screen   pt-[90px]  pb-[180px] px-4  sm:px-5  lg:px-8 overflow-y-auto ">
          <Outlet />
        </main>
      </div>

      {/* ================= BOTTOM PLAYER ================= */}
      <div className=" fixed bottom-3 right-0 left-0  lg:left-[245px] z-40">
        <BottomPlayer />
      </div>
    </div>
  );
};

export default MainLayout;
