import { BlogCard } from "@/components/blog-card";
import cover from "@/asset/cover.png";
import Image from "next/image";
import { PlayButton } from "@/components/button-play";
import YouTube from "react-youtube";
import bg_cover from "@/asset/bg-cover.png";

export default function AboutSection() {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-full h-auto">
        <div className="w-full flex flex-col gap-4">
          <p className="text-xl text-secondary font-bold">
            LEBIH DEKAT DENGAN TRAVELCO
          </p>
          <h2 className="text-4xl font-extrabold">MENGENAL TRAVELCO</h2>
          <h3 className="text-xl font-bold">
            🖼• Galeri Pariwisata & Blog Travel
          </h3>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-8 md:flex-row lg:gap-4 lg:justify-center lg:items-center">
            <div className="lg:w-1/4">
              <BlogCard
                img={cover}
                date={"26 DESEMBER 2023"}
                title={"Tips naik gunung Bromo biar gak capek cyin 😘"}
                desc={"Jadi gini gann, anda tau bromo?, yaa gunung kan?"}
              />
            </div>
            <div className="flex flex-col items-center justify-center relative w-full lg:w-1/2">
              <YouTube
                className="w-full flex justify-center"
                videoId="DiDJkl582dk"
              />
            </div>
          </div>
          <div className="sm:w-full sm:flex sm:justify-center sm:items-center lg:justify-center">
            <div className="w-full rounded-xl relative sm:w-1/2 md:w-full lg:justify-center lg:items-center lg:w-fit">
              <Image
                className="rounded-xl sm:w-full md:object-fill md:h-[16rem] md:w-[60rem] lg:w-[58rem]"
                src={bg_cover}
              />
              <div className="p-4 absolute top-0 left-0 text-white flex flex-col gap-4 md:top-16">
                <h3 className="text-xl font-bold lg:text-2xl">
                  Tips meminum air kawah biar lidah tidak melepuh 😁
                </h3>
                <p className="font-bold lg:text-xl">
                  Agar lidah tidak melepuh.... Pinjam dulu sepuluh....
                </p>
                <p className="font-bold lg:text-xl">Google Trending Baru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
