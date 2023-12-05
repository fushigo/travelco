import Image from "next/image";
import card_image from "@/asset/labuanbajo.png";
import { Button } from "flowbite-react";

export default function CardProduct({ title, price }) {
  return (
    <div className="flex flex-col w-[10rem] gap-4 bg-white shadow-2xl rounded-xl">
      <div>
        <Image
          className="w-full object-fill h-[10rem] rounded-t-xl"
          src={card_image}
        />
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <h2>{title}</h2>
          <p className="text-secondary font-bold">{price}</p>
          <Button className="text-black w-full hover:bg-secondary hover:text-white transition-all">
            Keranjang
          </Button>
        </div>
      </div>
    </div>
  );
}
