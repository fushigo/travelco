import bromo from "@/asset/bromo.svg";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

export function CardCart({
  destinasi,
  harga,
  quantity,
  hanldePlus,
  handleMin,
  handleDelete,
  handleCheckout,
}) {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-8 p-8 bg-white shadow-xl w-full rounded-lg">
      <div className="w-full lg:w-2/5">
        <Image
          className="w-[20rem] h-[10rem] object-cover rounded-lg"
          src={bromo}
        />
      </div>
      <div className="w-full flex flex-col gap-4 lg:w-1/2">
        <div>
          <h1 className="font-bold text-font">{destinasi}</h1>
        </div>
        <div>
          <p className="font-bold text-secondary">IDR {harga}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="btn">
                <p>-</p>
              </div>
              <div className="btn bg-slate-200">
                <p>{quantity}</p>
              </div>
              <div className="btn">
                <p>+</p>
              </div>
            </div>
            <div onClick={handleDelete} className="text-xl hover:cursor-pointer">
              <FaRegTrashAlt />
            </div>
          </div>
          <div className=" w-full btn bg-secondary text-white">CHECKOUT</div>
        </div>
      </div>
    </div>
  );
}
