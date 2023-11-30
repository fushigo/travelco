import Image from "next/image";

export default function TestiCard({ img, stars, name, text, who }) {
  return (
    <div className="p-8 flex flex-col justify-center items-center rounded-xl gap-8 text-center border-2 sm:w-[20rem]">
      <div className=" w-[12rem] h-[12rem] flex items-center justify-center rounded-full border-2 p-4 overflow-hidden">
        <Image className="rounded-full object-fill overflow-hidden" src={img} />
      </div>
      <p>{text}</p>
      <Image src={stars} />
      <p className="text-secondary font-bold text-xl">{name}</p>
      <p className="font-bold">{who}</p>
    </div>
  );
}
