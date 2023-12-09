import Image from "next/image";

export default function CardTopDest({ src, width, heigh, text, location }) {
  return (
    <>
      <div className="object-fill overflow-hidden relative">
        <Image
          alt="travelco"
          className="rounded-lg md:w-full xl:w-[15rem]"
          src={src}
          width={width}
          height={heigh}
        />
        <div className="absolute left-0 bottom-0 w-[8rem] rounded-tr-md flex flex-col bg-transparent justify-start items-center p-2  backdrop-blur-3xl xl:w-[10rem]">
          <p className="font-bold w-full text-start text-sm">{text}</p>
          <p className="w-full text-start text-sm">{location}</p>
        </div>
      </div>
    </>
  );
}
