import { Header } from "@/components/header";
import { DestinationsSection } from "@/components/pages/destinations";
import { HomeSection } from "@/components/pages/home";

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-center`}>
      <div className="w-full">
        <Header></Header>
      </div>
      <div className="container w-full gap-16 flex flex-col justify-center items-center p-4 overflow-hidden">
        <HomeSection />
        <DestinationsSection />
      </div>
    </main>
  );
}
