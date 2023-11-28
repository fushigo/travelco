import Image from "next/image";
import partner_ic1 from "@/asset/image_part1.png";
import partner_ic2 from "@/asset/image_part2.png";
import partner_ic3 from "@/asset/image_part3.png";

export default function PartnerCommponent() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-8">
        <Image src={partner_ic1} />
        <Image src={partner_ic2} />
        <Image src={partner_ic3} />
      </div>
    </>
  );
}
