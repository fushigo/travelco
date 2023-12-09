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
          <p data-aos="fade-right" className="text-xl text-secondary font-bold">
            LEBIH DEKAT DENGAN TRAVELCO
          </p>
          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-4xl font-extrabold"
          >
            MENGENAL TRAVELCO
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-xl font-bold"
          >
            🖼• Galeri Pariwisata & Blog Travel
          </h3>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-4 lg:justify-around lg:items-center xl:justify-center">
            <div data-aos="fade-right" className="lg:w-2/5 max-w-xl">
              <BlogCard
                img={cover}
                date={"26 DESEMBER 2023"}
                title={"Tips naik gunung Bromo biar gak capek cyin 😘"}
                desc={"Jadi gini gann, anda tau bromo?, yaa gunung kan?"}
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col items-center justify-center relative w-full lg:w-1/2"
            >
              <YouTube
                className="w-full flex justify-center"
                videoId="DiDJkl582dk"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="sm:w-full sm:flex sm:justify-center sm:items-center lg:justify-center"
          >
            <div className="w-full rounded-xl relative sm:w-1/2 md:w-full lg:justify-center lg:items-center xl:w-[50rem] xl:h-[20rem]">
              <Image
                alt="travelco"
                className="rounded-xl sm:w-full md:object-fill w-full xl:h-[20rem]"
                src={bg_cover}
              />
              <div className="p-4 absolute top-0 left-0 text-white flex flex-col gap-4 md:top-16 lg:top-1/2 lg:translate-y-1/2 xl:top-18">
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
