import { Search, ScanFace, Sun } from "lucide-react";

const TopBar = () => {
  return (
    <header className=" w-full px-5  py-5 lg:px-8 lg:py-7 border-b border-white/[0.05] bg-[#080c14] ">
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* Search */}
        <div
          className="
            relative
            flex-1
            max-w-[520px]
          "
        >
          <Search
            size={21}
            strokeWidth={1.8}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            className="
              w-full
              h-[52px]

              pl-12
              pr-4

              rounded-xl

              bg-[#0d121c]

              border
              border-white/[0.08]

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
          <button className="   hidden  sm:flex   items-center   gap-2.5  h-[52px] px-5  rounded-xl bg-violet-600/[0.12]   border  border-violet-500/20   text-violet-300 hover:bg-violet-600/20  hover:border-violet-500/30 transition ">
            <ScanFace size={20} strokeWidth={1.8} />

            <span className="text-sm font-medium">Mood Detection</span>
          </button>

          {/* Theme */}
          <button className="  items-center justify-center rounded-full  text-gray-300 hover:bg-white/[0.05]  hover:text-white transition  ">
            <Sun size={22} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
