import { Header } from "@/components/header";
import { CartPage } from "@/components/pages/cart";
import { FooterSection } from "@/components/pages/footer";
import { HistoryPage } from "@/components/pages/history";

export default function History() {
  return (
    <>
      <Header />
      <HistoryPage />
      <FooterSection />
    </>
  );
}
