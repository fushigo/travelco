import Image from "next/image";
import hero_icon from "@/asset/hero_icon.png";
import polygon_icon from "@/asset/Polygon.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { PartnerCommponent } from "@/components/partner";
import { FaPlay } from "react-icons/fa";
import { PlayButton } from "@/components/button-play";
import YouTube from "react-youtube";
import { Modal, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeSection() {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");
  const Router = useRouter();

  const handleClick = () => {
    Router.push("/login");
  };

  useEffect(() => {
    setModalPlacement("center");
    AOS.init();
  }, []);

  return (
    <div id="home" className="flex flex-col w-full h-auto gap-8 lg:gap-4">
      <div className="flex flex-row items-center justify-between gap-2 ">
        <div
          data-aos="fade-right"
          className="py-3 rounded-full px-4 w-fit bg-blue-200"
        >
          <p className="font-bold text-[11px] text-blue-600 font-jakarta sm:text-sm">
            ✈ • Explore the wonderful indonesia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row lg:items-center">
        <div data-aos="zoom-in-right" className="space-y-4">
          <h1 className="text-4xl font-extrabold font-jakarta leading-tight lg:text-6xl">
            Liburan & nikmati <span className="text-secondary">tempatbaru</span>{" "}
            di indonesia <span className="font-sans">🏝</span>
          </h1>
          <p className="text-base font-jakarta">
            Travelco membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          className="w-full sm:flex sm:justify-center"
        >
          <Image
            alt="travelco"
            className="bg-transparent sm:w-1/2 md:w-3/5"
            src={hero_icon}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8 flex-wrap items-center md:justify-start">
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="btn btn-ghost bg-secondary text-primary text-xl"
          onClick={handleClick}
        >
          Mulai sekarang →
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-row flex-wrap justify-center items-center gap-4 hover:cursor-pointer w-fit"
          onClick={() => setOpenModal(true)}
        >
          <PlayButton />
          Play Demo
        </div>

        <div>
          <Modal
            className="backdrop-blur-sm w-full xl:w-1/2"
            position={modalPlacement}
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header>Demo Video</Modal.Header>
            <Modal.Body>
              <div className="flex flex-col items-center justify-center relative w-full">
                <YouTube
                  className="w-full flex justify-center"
                  videoId="DiDJkl582dk"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-black" onClick={() => setOpenModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="w-full">
        <PartnerCommponent />
      </div>
    </div>
  );
}
