import Image from "next/image";

export default function BlogCard({ img, date, title, desc }) {
  return (
    <div className="flex flex-col bg-primary shadow-xl rounded-xl">
      <div>
        <Image className="w-full" src={img} />
      </div>
      <div className="flex flex-col gap-8 p-8">
        <p className="font-bold">{date}</p>
        <div className="space-y-4">
          <h4 className="font-extrabold">{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
