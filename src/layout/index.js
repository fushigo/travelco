import { Header } from "@/components/header";
import { FooterSection } from "@/components/pages/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full h-auto">{children}</div>
      <FooterSection />
    </>
  );
}
