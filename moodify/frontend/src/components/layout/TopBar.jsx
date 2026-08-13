import { Search, ScanFace, X, TableOfContents } from "lucide-react";
import { useState } from "react";
import SongUploadCard from "../../features/home/components/SongUploadCard";
import MobileSidebar from "./MobileSidebar";

const TopBar = () => {
  const [showUploadModel, setShowUploadModel] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  return (
    <header className=" w-full px-5  py-5 lg:px-8 lg:py-7 border-b border-white/[0.05] bg-[#080c14] ">
      <div className=" flex   items-center justify-between gap-4 ">
        {/* Search */}
        <div className=" relative flex-1 max-w-[520px]">
          <Search
            size={21}
            strokeWidth={1.8}
            className="  absolute left-4   top-1/2 -translate-y-1/2  text-gray-400 "
          />

          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            className="w-full  h-[52px]  pl-12  pr-4  rounded-xl  bg-[#0d121c] borde border-white/[0.08]
              text-sm
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-violet-500/40
              focus:ring-2
              focus:ring-violet-500/10
              transition
            "
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Mood Detection */}
          <button className=" cursor-pointer   hidden  sm:flex   items-center   gap-2.5  h-[52px] px-5  rounded-xl bg-violet-600/[0.12]   border  border-violet-500/20   text-violet-300 hover:bg-violet-600/20  hover:border-violet-500/30 transition ">
            <ScanFace size={20} strokeWidth={1.8} />

            <span className="text-sm font-medium">Mood Detection</span>
          </button>

          <button
            onClick={() => setShowUploadModel(true)}
            className=" cursor-pointer  hidden  sm:flex   items-center   gap-2.5  h-[52px] px-5  rounded-xl bg-violet-600/[0.12]   border  border-violet-500/20   text-violet-300 hover:bg-violet-600/20  hover:border-violet-500/30 transition "
          >
            <span className="text-sm font-medium">Create Song</span>
          </button>
          <button
            onClick={() => {
              setMobileSidebar(true);
            }}
            className="sm:hidden cursor-pointer"
          >
            <TableOfContents />
          </button>
        </div>
      </div>

      {showUploadModel && (
        <div
          className="fixed inset-0  z-[100] flex items-center justify-center p-4  bg-black/70   backdrop-blur-sm"
          onClick={() => setShowUploadModel(false)}
        >
          {/* Modal */}
          <div
            className="  relative  w-full  max-w-xl max-h-[90vh]  overflow-y-auto "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowUploadModel(false)}
              className=" cursor-pointer  absolute  right-4  top-4 z-10 w-9  h-9 rounded-full  flex  items-center
                justify-center
                bg-white/[0.06]
                border border-white/[0.08]
                text-gray-400
                hover:text-white
                hover:bg-white/[0.1]
                transition
              "
            >
              <X size={18} />
            </button>

            <SongUploadCard onSuccess={() => setShowUploadModel(false)} />
          </div>
        </div>
      )}

      <MobileSidebar
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />
    </header>
  );
};

export default TopBar;
