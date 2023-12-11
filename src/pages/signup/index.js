import { Header } from "@/components/header";
import { FooterSection } from "@/components/pages/footer";
import { SignUpPage } from "@/components/pages/signup";
import axios from "axios";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="py-30 bg-slate-100">
        <SignUpPage />
      </div>
      <FooterSection />
    </div>
  );
}
