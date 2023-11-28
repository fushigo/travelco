import Image from "next/image";
import hero_icon from "@/asset/hero_icon.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";

export default function HomeSection() {
  return (
    <div className="flex flex-col w-full h-auto gap-4">
      <div className="flex flex-row items-center gap-2">
        <div className="py-3 rounded-full px-5 w-fit bg-blue-200">
          <p className="font-bold text-sm text-blue-600 font-jakarta">✈ • Explore the wonderful indonesia!</p>
        </div>
        <div className="p-3 bg-blue-500 text-white rounded-full"><FaCartShopping /></div>
        <div className="p-3 bg-blue-200 rounded-full text-blue-500"><FaUserLarge /></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold font-jakarta">Liburan & nikmati <span className="text-secondary">tempatbaru</span> di indonesia <span className="font-sans">🏝</span></h1>
          <p className="text-base font-jakarta">Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
        </div>
        <div>
        <Image src={hero_icon}/>
        </div>
        <div>
          <div className="btn btn-ghost bg-secondary text-primary text-xl">Mulai sekarang → </div>
        </div>
      </div>
    </div>
  );
}
