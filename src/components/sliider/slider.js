// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import man1 from "@/asset/man1.jpg";
import man2 from "@/asset/man2.jpg";
import man3 from "@/asset/man3.jpg";
import stars from "@/asset/stars.png";

// Import Swiper styles
import "swiper/css";
import { TestiCard } from "../testi-card";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TestiCard
          img={man1}
          stars={stars}
          name={"Juldan Willy"}
          text={"Travelco pelayanan baik dan para wokers sangat ramah"}
          who={"Traveler"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestiCard
          img={man2}
          stars={stars}
          name={"Juldan Willy"}
          text={"Travelco pelayanan baik dan para wokers sangat ramah"}
          who={"Traveler"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestiCard
          img={man3}
          stars={stars}
          name={"Juldan Willy"}
          text={"Travelco pelayanan baik dan para wokers sangat ramah"}
          who={"Traveler"}
        />
      </SwiperSlide>
    </Swiper>
  );
}