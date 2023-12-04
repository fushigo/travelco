import { Header } from "@/components/header";
import { FooterSection } from "@/components/pages/footer";
import { LoginPage } from "@/components/pages/login";
import axios from "axios";

export default function Login() {
  return (
    <>
      <Header />
      <LoginPage />
      <FooterSection />
    </>
  );
}
