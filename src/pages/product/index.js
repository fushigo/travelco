import { Header } from "@/components/header";
import { ProductPage } from "@/components/pages/Product";
import { FooterSection } from "@/components/pages/footer";

export default function Product() {
  return (
    <>
      <Header />
      <div className="flex justify-center py-20 bg-white">
        <ProductPage />
      </div>
      <FooterSection/>
    </>
  );
}
