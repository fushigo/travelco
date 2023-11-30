export default function TextIcon({ number, title, desc }) {
  return (
    <>
      <div className="flex flex-row gap-x-4 w-full items-center justify-center sm:justify-start">
        <div className="p-5 rounded-full bg-[#EFE0B4]">{number}</div>
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </>
  );
}
