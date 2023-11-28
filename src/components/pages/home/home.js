import Image from "next/image";
import hero_icon from "@/asset/hero_icon.png";
import polygon_icon from "@/asset/Polygon.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { PartnerCommponent } from "@/components/partner";

export default function HomeSection() {
  return (
    <div className="flex flex-col w-full h-auto gap-12">
      <div className="flex flex-row items-center justify-around gap-2">
        <div className="py-3 rounded-full px-4 w-fit bg-blue-200">
          <p className="font-bold text-[11px] text-blue-600 font-jakarta">
            ✈ • Explore the wonderful indonesia!
          </p>
        </div>
        <div className="p-2 bg-blue-500 text-white rounded-full">
          <FaCartShopping />
        </div>
        <div className="p-2 bg-blue-200 rounded-full text-blue-500">
          <FaUserLarge />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold font-jakarta leading-tight">
            Liburan & nikmati <span className="text-secondary">tempatbaru</span>{" "}
            di indonesia <span className="font-sans">🏝</span>
          </h1>
          <p className="text-base font-jakarta">
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
        </div>
      </div>
      <div>
        <Image className="shadow-2xl bg-transparent" src={hero_icon} />
      </div>
      <div className="flex flex-row justify-around gap-8 flex-wrap items-center">
        <div className="btn btn-ghost bg-secondary text-primary text-xl">
          Mulai sekarang →
        </div>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <div className="btn btn-ghost bg-white text-primary rounded-full border-2 border-secondary">
            <Image src={polygon_icon} />
          </div>
          <p>Putar Demo</p>
        </div>
      </div>
      <div className="w-full">
        <PartnerCommponent />
      </div>
    </div>
  );
}
