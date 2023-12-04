import Image from "next/image";
import hero_icon from "@/asset/hero_icon.png";
import polygon_icon from "@/asset/Polygon.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { PartnerCommponent } from "@/components/partner";
import { FaPlay } from "react-icons/fa";
import { PlayButton } from "@/components/button-play";
import YouTube from "react-youtube";

export default function HomeSection() {
  const handleClick = () => {
    alert("Home Section");
  };

  return (
    <div id="home" className="flex flex-col w-full h-auto gap-8 lg:gap-4">
      <div className="flex flex-row items-center justify-between gap-2 ">
        <div className="py-3 rounded-full px-4 w-fit bg-blue-200">
          <p className="font-bold text-[11px] text-blue-600 font-jakarta sm:text-sm">
            ✈ • Explore the wonderful indonesia!
          </p>
        </div>
        <div className="flex flex-row gap-8">
          <div className="p-2 bg-blue-500 text-white rounded-full lg:text-xl hover:cursor-pointer">
            <FaCartShopping />
          </div>
          <div
            onClick={handleClick}
            className="p-2 bg-blue-200 rounded-full text-blue-500 lg:text-xl hover:cursor-pointer"
          >
            <FaUserLarge />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row lg:items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold font-jakarta leading-tight lg:text-6xl">
            Liburan & nikmati <span className="text-secondary">tempatbaru</span>{" "}
            di indonesia <span className="font-sans">🏝</span>
          </h1>
          <p className="text-base font-jakarta">
            Travelco membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
        </div>
        <div className="w-full sm:flex sm:justify-center">
          <Image className="bg-transparent sm:w-1/2 md:w-3/5" src={hero_icon} />
        </div>
      </div>
      <div className="flex flex-row justify-around gap-8 flex-wrap items-center md:justify-start">
        <div className="btn btn-ghost bg-secondary text-primary text-xl">
          Mulai sekarang →
        </div>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <label for="my_modal_6" className="btn">
            <FaPlay />
            Mulai Demo
          </label>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div class="modal-box w-fit">
              <YouTube videoId="DiDJkl582dk" />
              <div className="modal-action">
                <label for="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <PartnerCommponent />
      </div>
    </div>
  );
}
