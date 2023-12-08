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
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TestiCard
          img={man1}
          stars={stars}
          name={"Juldan Willy F"}
          text={"Travelco pelayanan baik dan para wokers sangat ramah"}
          who={"Traveler"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestiCard
          img={man2}
          stars={stars}
          name={"Geusan Edurais A"}
          text={"Travelco pelayanan baik dan para wokers sangat ramah"}
          who={"Traveler"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestiCard
          img={man3}
          stars={stars}
          name={"Yoga Irgi K"}
          text={"Travelco pelayanan baik dan para wokers sangat ramah"}
          who={"Traveler"}
        />
      </SwiperSlide>
    </Swiper>
  );
}
