import Image from "next/image";
import map_img from "@/asset/map.png";
import { Icons } from "@/components/icons";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationSection() {
  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <div>
        <h2 className="font-bold text-xl text-secondary">CARI TEMPAT WISATA</h2>
        <h3 className="font-extrabold text-4xl">
          Cari Tempat Wisata Didekatmu
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
          yang sedang popular di daerah kamu dengan begitu kamu akan selalu
          update dan gak kudet lagi.
        </p>
        <Image src={map_img} />
        <div className="flex flex-row justify-center items-center w-full">
          <div className="flex flex-col gap-4 w-1/3 flex-wrap items-center justify-center">
            <Icons icons={<FaLocationDot />} />
            <h4 className="text-center">Popular di dekatmu</h4>
            <p className="text-center">
              Tempat pariwisata yang populer dan pasti dikenal semua orang
              didekatmu
            </p>
          </div>
          <div className="flex flex-col gap-4 w-1/3 flex-wrap items-center justify-center">
            <Icons icons={<FaLocationDot />} />
            <h4 className="text-center">Popular di dekatmu</h4>
            <p className="text-center">
              Tempat pariwisata yang populer dan pasti dikenal semua orang
              didekatmu
            </p>
          </div>
          <div className="flex flex-col gap-4 w-1/3 flex-wrap items-center justify-center">
            <Icons icons={<FaLocationDot />} />
            <h4 className="text-center">Popular di dekatmu</h4>
            <p className="text-center">
              Tempat pariwisata yang populer dan pasti dikenal semua orang
              didekatmu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
