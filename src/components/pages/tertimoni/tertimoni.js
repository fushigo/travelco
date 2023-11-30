import { Slider } from "@/components/sliider";

export default function TestimoniSection() {
  return (
    <div className="w-full h-auto flex flex-col gap-8">
      <div className="flex flex-col gap-8 text-center">
        <p className="text-xl font-bold text-secondary">
          MASIH RAGU DENGAN TRAVELCO?
        </p>
        <h2 className="font-extrabold text-4xl">TESTIMONIAL TRAVELCO</h2>
        <h3 className="text-xl font-bold">💬 • Apa Kata Mereka Tentang Kami</h3>
        <p>
          Penasaran apa saja review dari pengguna yang memakai aplikasi dan
          website Travelco buat nentuin kemana liburan mereka selanjutnya? Yuk
          cek dibawah!
        </p>
      </div>

      <div className="mt-8">
        <Slider />
      </div>
    </div>
  );
}
