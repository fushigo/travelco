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
          <h3 className="text-xl font-bold">Galeri pariwisata & Blog Travel</h3>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-8">
            <div>
              <BlogCard
                img={cover}
                date={"26 DESEMBER 2023"}
                title={"Tips naik gunung Bromo biar gak capek cyin 😘"}
                desc={"Jadi gini gann, anda tau bromo?, yaa gunung kan?"}
              />
            </div>
            <div className="flex flex-col items-center justify-center relative w-full">
              <YouTube
                className="w-full flex  justify-center"
                videoId="DiDJkl582dk"
              />
            </div>
          </div>
          <div className="w-full rounded-xl relative">
            <Image className="rounded-xl" src={bg_cover} />
            <div className="p-4 absolute top-0 left-0 text-white flex flex-col gap-4">
              <h3 className="text-xl font-bold">
                Tips meminum air kawah biar lidah tidak melepuh 😁
              </h3>
              <p className="font-bold">
                Agar lidah tidak melepuh.... Pinjam dulu sepuluh....
              </p>
              <p className="font-bold">Google Trending Baru</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
