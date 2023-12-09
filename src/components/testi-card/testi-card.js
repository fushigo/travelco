import Image from "next/image";

export default function TestiCard({ img, stars, name, text, who }) {
  return (
    <div className="p-8 flex flex-col shadow-xl justify-center items-center rounded-xl gap-8 text-center sm:w-[20rem] my-8">
      <div className=" w-[12rem] h-[12rem] flex items-center justify-center rounded-full border-2 border-slate-400 p-4 overflow-hidden">
        <Image
          alt="travelco"
          className="rounded-full object-fill overflow-hidden"
          src={img}
        />
      </div>
      <p>{text}</p>
      <Image alt="travelco" src={stars} />
      <p className="text-secondary font-bold text-xl">{name}</p>
      <p className="font-bold">{who}</p>
    </div>
  );
}
