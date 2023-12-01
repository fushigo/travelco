import Image from "next/image";
import bali_ic from "@/asset/bali.png";
import bendera_ic from "@/asset/bendera.png";
import { FaLeaf } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function CardAbsolute() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 relative bg-primary w-[16rem] shadow-2xl rounded-2xl">
        <Image src={bali_ic} />
        <h3 className="font-extrabold text-lg">Liburan ke Bali</h3>
        <p className="font-sm">12-15 Desember 2023 | by MSA</p>
        <div className="flex flex-row gap-x-4 items-center justify-start relative">
          <div className="p-4 rounded-full bg-slate-100 text-slate-500">
            <FaLeaf />
          </div>
          <div className="p-4 rounded-full bg-slate-100 text-slate-500">
            <FaRegMap />
          </div>
          <div className="p-4 rounded-full bg-slate-100 text-slate-500">
            <FaLocationArrow />
          </div>
          <div className="flex flex-row items-start justify-center py-4 gap-2 absolute rounded-xl -right-24 w-[10rem] bg-primary shadow-2xl">
            <div>
              <Image className="rounded-full" src={bendera_ic} />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Ongoing</p>
              <p className="font-extrabold text-[11px]">Jelajah Indonesia</p>
              <p className="text-[10px] text-secondary">
                40% <span className="font-bold text-black">Completed</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row items-center justify-between">
          <FaRegBuilding />
          <p>40 Orang pergi bersama</p>
          <FaRegHeart />
        </div>
      </div>
    </>
  );
}
