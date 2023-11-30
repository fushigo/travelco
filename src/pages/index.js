import { Header } from "@/components/header";
import { AboutSection } from "@/components/pages/about";
import { DestinationsSection } from "@/components/pages/destinations";
import { FooterSection } from "@/components/pages/footer";
import { HomeSection } from "@/components/pages/home";
import { LocationSection } from "@/components/pages/locations";
import { QuestionSection } from "@/components/pages/question";
import { ReservationSection } from "@/components/pages/reservasion";
import { TestimoniSection } from "@/components/pages/tertimoni";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center bg-white text-font`}
    >
      <div className="w-full">
        <Header></Header>
      </div>
      <div className="container w-full gap-16 flex flex-col justify-center items-center p-4 overflow-hidden pt-20 md:px-8 lg:px-20">
        <HomeSection />
        <DestinationsSection />
        <ReservationSection />
        <LocationSection />
        <AboutSection />
        <TestimoniSection />
        <QuestionSection />
      </div>
      <div className="w-full">
        <FooterSection />
      </div>
    </main>
  );
}
