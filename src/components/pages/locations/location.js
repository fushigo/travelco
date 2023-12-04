import Image from "next/image";
import map_img from "@/asset/map.png";
import { Icons } from "@/components/icons";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationSection() {
  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <div>
        <h2 className="font-bold text-xl text-secondary md:text-center">
          CARI TEMPAT WISATA
        </h2>
        <h3 className="font-extrabold text-4xl md:text-center">
          🗺 • Cari Tempat Wisata Didekatmu
        </h3>
      </div>
      <div className="flex flex-col gap-8 md:text-center">
        <p>
          Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat
          yang sedang popular di daerah kamu dengan begitu kamu akan selalu
          update dan gak kudet lagi.
        </p>
        <Image className="sm:w-full" src={map_img} />
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <div className="flex flex-row gap-4 w-full items-center justify-center md:justify-start md:flex-nowrap">
            <Icons icons={<FaLocationDot />} />
            <div>
              <h4 className="text-start md:text-start font-bold  ">
                Popular di dekatmu
              </h4>
              <p className="text-start md:text-start ">
                Tempat pariwisata yang populer dan pasti dikenal semua orang
                didekatmu
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-center md:justify-start md:flex-nowrap">
            <Icons icons={<FaLocationDot />} />
            <div>
              <h4 className="text-start md:text-start font-bold  ">
                Popular di dekatmu
              </h4>
              <p className="text-start md:text-start ">
                Tempat pariwisata yang populer dan pasti dikenal semua orang
                didekatmu
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-center md:justify-start md:flex-nowrap">
            <Icons icons={<FaLocationDot />} />
            <div>
              <h4 className="text-start md:text-start font-bold  ">
                Popular di dekatmu
              </h4>
              <p className="text-start md:text-start ">
                Tempat pariwisata yang populer dan pasti dikenal semua orang
                didekatmu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
