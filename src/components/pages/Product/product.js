import { CardProduct } from "@/components/card-product";

export default function ProductPage() {
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
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
        <CardProduct title={"Paket Wisata Yogyakarta"} price={"Rp 200.000"} />
      </div>
    </div>
  );
}
