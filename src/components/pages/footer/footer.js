import Image from "next/image";
import one from "@/asset/one.png";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";

export default function FooterSection() {
  return (
    <div className="flex flex-col septaGtg justify-center items-center bg-white text-black">
      <div className="bg-secondary rounded-t-2xl md:flex md:flex-row md:items-center">
        <div className="flex flex-col gap-8 p-8">
          <h2 className="text-4xl font-extrabold text-primary">
            Masih bingung cari tempat yang cocok?
          </h2>
          <p className="text-base text-sky-100">
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            alt="travelco"
            className="sm:w-full md:h-[22rem] md:w-[50rem]"
            src={one}
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 container md:flex-row md:gap-12 lg:px-12">
        <div className="flex flex-col gap-4 md:w-full">
          <h1 className="text-4xl font-extrabold">Travelco</h1>
          <h2 className="text-base">
            Travelco adalah website atau layanan aplikasi yang membantu kamu
            memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’
            agar lebih dikenal dan ramai.
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-4 items-center">
              <div>
                <FiPhoneCall />
              </div>
              <div>+62-838-7612-2926</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div>
                <CiMail />
              </div>
              <div>fushigo17@gmail.com</div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div>
                <MdOutlineLocationOn />
              </div>
              <div>Surakarta, Jawa Tengah</div>
            </div>
          </div>
          <div className="hidden items-start justify-start mt-8 font-bold md:flex border-t-2 p-8 w-full">
            <p>© 2023-2024, All Rights Reserved</p>
          </div>
        </div>

        <div className="flex flex-row gap-8 mt-8 w-full justify-center sm:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Tentang</h2>
            <a className="text-sm">Tentang Kami</a>
            <a className="text-sm">Blog</a>
            <a className="text-sm">Karir</a>
            <a className="text-sm">Pekerjaan</a>
            <a className="text-sm">Berita</a>
            <a className="text-sm">Sponsor</a>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Support</h2>
            <a className="text-sm">Online</a>
            <a className="text-sm">Whatsapp</a>
            <a className="text-sm">Telegram</a>
            <a className="text-sm">Tiket</a>
            <a className="text-sm">Call Center</a>
            <a className="text-sm">Bantuan</a>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <a className="text-sm">Akun</a>
            <a className="text-sm">Organisir</a>
            <a className="text-sm">Order</a>
            <a className="text-sm">Pembayaran</a>
            <a className="text-sm">Guide</a>
            <a className="text-sm">Bahasa</a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-8 font-bold md:hidden">
          <p>© 2023-2024, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
