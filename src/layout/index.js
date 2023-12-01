import { Header } from "@/components/header";

export default function Layout({ childern }) {
  return (
    <>
      <Header />
      <div className="w-full h-auto">{childern}</div>
    </>
  );
}
