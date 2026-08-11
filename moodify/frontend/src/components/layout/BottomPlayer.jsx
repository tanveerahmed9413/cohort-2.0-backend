import { SkipBack, SkipForward, Pause, Play, Volume2 } from "lucide-react";

const BottomPlayer = ({
  isPlaying = true,
  currentTime = "1:08",
  duration = "3:20",
}) => {
  return (
    <div className="w-full  bottom-3 left-3 right-3 z-50 rounded-2xl border border-violet-500/30 bg-[#0b101c]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(79,70,229,0.12)] text-white">
      {/* ================= DESKTOP PLAYER ================= */}
      <div
        className="  hidden lg:flex h-[138px] items-center  gap-6 px-10
        "
      >
        {/* Album + Song Info */}
        <div className="flex items-center gap-6 min-w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1786130938332-7a77765427af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
            alt="song image"
            className="
              w-[82px]
              h-[82px]
              rounded-xl
              object-cover
            "
          />

          <div>
            <h3 className="text-[18px] font-semibold">Blinding Lights</h3>

            <p className="text-gray-400 mt-1">The Weeknd</p>
          </div>
        </div>

        {/* Center Controls */}
        <div className="flex-1 flex flex-col items-center gap-5">
          <div className="flex items-center gap-8">
            <button className="text-white">
              <SkipBack size={24} fill="currentColor" />
            </button>

            {/* Play */}
            <button
              className="
                w-[68px]
                h-[68px]
                rounded-full

                flex
                items-center
                justify-center

                bg-violet-600

                shadow-[0_0_30px_rgba(124,58,237,0.55)]

                hover:bg-violet-500
                transition
              "
            >
              {isPlaying ? (
                <Pause size={30} fill="white" />
              ) : (
                <Play size={30} fill="white" />
              )}
            </button>

            <button className="text-white">
              <SkipForward size={24} fill="currentColor" />
            </button>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3 w-full max-w-[550px]">
            <span className="text-xs text-gray-400">{currentTime}</span>

            <div className="relative flex-1 h-1.5 rounded-full bg-white/[0.08]">
              <div className="  absolute   left-0   top-0 h-full   w-[35%] rounded-full bg-violet-500  " />

              <div className=" absolute left-[35%] top-1/2 -translate-y-1/2  w-3 h-3 rounded-full  bg-white " />
            </div>

            <span className="text-xs text-gray-400">{duration}</span>
          </div>
        </div>

        {/* Volume + Queue */}
        <div className="flex items-center gap-7 min-w-[240px] justify-end">
          <div className="flex items-center gap-3">
            <Volume2 size={21} className="text-gray-300" />

            <div className="w-[120px] h-1.5 rounded-full bg-white/[0.08]">
              <div className="w-[75%] h-full rounded-full bg-violet-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className=" lg:hidden  px-4  py-3">
        {/* Top Row */}
        <div className="flex items-center gap-3">
          {/* Album */}
          <img
            src="https://images.unsplash.com/photo-1786130938332-7a77765427af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
            alt="song image"
            className="   w-[52px] h-[52px]  rounded-lg  object-cover   flex-shrink-0  "
          />

          {/* Song */}
          <div className="flex-1 min-w-0">
            <h3 className=" text-[14px] font-semibold  truncate">
              Blinding Lights
            </h3>

            <p className=" text-xs  text-gray-400 mt-0.5 truncate">
              The Weeknd
            </p>
          </div>

          {/* Play */}
          <button className=" w-10 h-10 rounded-full flex  items-center justify-center  bg-violet-600  shadow-[0_0_20px_rgba(124,58,237,0.45)]  ">
            {isPlaying ? (
              <Pause size={18} fill="white" />
            ) : (
              <Play size={18} fill="white" />
            )}
          </button>
        </div>

        {/* Mobile Progress */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] text-gray-500">{currentTime}</span>

          <div className="relative flex-1 h-1 rounded-full bg-white/[0.08]">
            <div className="absolute  left-0  top-0  h-full  w-[35%] rounded-full bg-violet-500 " />
          </div>

          <span className="text-[10px] text-gray-500">{duration}</span>
        </div>

        {/* Tablet Controls */}
        <div className=" flex  items-center justify-center gap-8 mt-3">
          <SkipBack size={20} fill="currentColor" />

          <SkipForward size={20} fill="currentColor" />

          <Volume2 size={18} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
