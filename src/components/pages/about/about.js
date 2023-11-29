import { BlogCard } from "@/components/blog-card";
import cover from "@/asset/cover.png";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col gap-8 w-full h-auto">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-4xl font-extrabold">MENGENAL TRAVELCO</h2>
          <h3 className="text-xl font-bold">Galeri pariwisata & Blog Travel</h3>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div>
              <BlogCard
                img={cover}
                date={"26 DESEMBER 2023"}
                title={"Tips naik gunung Bromo biar gak capek cyin 😘"}
                desc={"Jadi gini gann, anda tau bromo?, yaa gunung kan?"}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src={cover} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
