import { CardTopDest } from "@/components/card";
import labuanbajo from "@/asset/labuanbajo.svg";
import rajaampat from "@/asset/rajaampat.svg";
import kawahijen from "@/asset/kawahijen.svg";
import bromo from "@/asset/bromo.svg";

export default function DestinationsSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full  ">
      <h2
        data-aos="fade-right"
        className="w-full font-bold text-secondary text-xl"
      >
        DESTINASI FAVORIT
      </h2>
      <div className="flex flex-row flex-wrap justify-between items-center w-full">
        <h3
          data-aos="fade-right"
          data-aos-delay="300"
          className="text-4xl font-bold text-font"
        >
          ✈ • Temukan Destinasi Favoritmu
        </h3>
        <p className="text-secondary">Lihat semua {">"}</p>
      </div>
      <div
        data-aos="zoom-in-up"
        className="w-full flex flex-row flex-wrap gap-2 gap-y-4 justify-around"
      >
        <CardTopDest
          src={rajaampat}
          width={200}
          text={"Raja Ampat"}
          location={"Papua"}
        />
        <CardTopDest
          src={labuanbajo}
          width={200}
          text={"Labuan Bajo"}
          location={"NTT"}
        />
        <CardTopDest
          src={kawahijen}
          width={200}
          text={"Kawah Ijen"}
          location={"Jawa Timur"}
        />
        <CardTopDest
          src={bromo}
          width={200}
          text={"Bromo"}
          location={"Jawa Timur"}
        />
      </div>
    </div>
  );
}
