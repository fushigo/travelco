import { CardAbsolute } from "@/components/card-absolute";
import { TextIcon } from "@/components/text-icon";

export default function ReservationSection() {
  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <div>
        <h2 className="font-bold text-xl text-secondary">RESERVASI TEMPAT</h2>
        <h3 className="font-extrabold text-4xl leading-tight">
          Gak mau ngantri? reservasi aja!
        </h3>
      </div>
      <div className="md:flex-row md:flex justify-between space-y-8 items-center md:gap-48">
        <div className="flex flex-col w-full gap-y-8">
          <TextIcon
            number={1}
            title={"Cari tempat yang kamu mau"}
            desc={
              "Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Travelco."
            }
          />
          <TextIcon
            number={2}
            title={"Isi data dan konfirmasi pembayaran"}
            desc={"Tulis dan lengkapi data kamu untuk keperluan data booking."}
          />
          <TextIcon
            number={3}
            title={"Tinggal masuk dan enjoy!"}
            desc={
              "Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan."
            }
          />
        </div>
        <div className="w-full xl:w-[40rem]">
          <CardAbsolute />
        </div>
      </div>
    </div>
  );
}
