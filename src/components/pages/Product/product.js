import { CardProduct } from "@/components/card-product";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    setSession(getCookie("session.cookie"));
  });

  const click = () => {
    if (!session) {
      alert("anda belum login");
    } else {
      alert("anda sudah login");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      <div>
        <h1 className="text-font font-extrabold text-4xl">
          Temukan{" "}
          <span className="text-secondary">
            Destinasi <br /> Favorit
          </span>{" "}
          Anda!
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full h-auto gap-4 pt-8 md:justify-around">
        <CardProduct
          title={"Paket Wisata Yogyakarta"}
          price={"Rp 200.000"}
          handleClick={click}
        />
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
      </div>
    </div>
  );
}
