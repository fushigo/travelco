import { CardTopDest } from "@/components/card";
import labuanbajo from "@/asset/labuanbajo.png";
import rajaampat from "@/asset/rajaampat.png";
import kawahijen from "@/asset/kawahijen.png";
import bromo from "@/asset/bromo.png";

export default function DestinationsSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full">
      <h2 className="w-full font-bold text-secondary text-xl">
        DESTINASI FAVORIT
      </h2>
      <div className="flex flex-row flex-wrap justify-between items-center w-full">
        <h3 className="text-lg font-bold text-font">Temukan Destinasimu</h3>
        <p className="text-secondary">Lihat semua {">"}</p>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-2 gap-y-4 justify-around">
        <CardTopDest
          src={rajaampat}
          width={150}
          text={"Raja Ampat"}
          location={"Papua"}
        />
        <CardTopDest
          src={labuanbajo}
          width={150}
          text={"Labuan Bajo"}
          location={"NTT"}
        />
        <CardTopDest
          src={kawahijen}
          width={150}
          text={"Kawah Ijen"}
          location={"Jawa Timur"}
        />
        <CardTopDest
          src={bromo}
          width={150}
          text={"Labuan Bajo"}
          location={"Jawa Timur"}
        />
      </div>
    </div>
  );
}
