import { DashboardPage } from "@/components/pages/dashboard";
import Layout from "@/layout";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const cookies = getCookie("session.cookie");
  const getRole = getCookie("role.cookie");
  const Router = useRouter();

  useEffect(() => {
    if (!cookies || getRole === "USER") {
      Router.push({ pathname: "/" });
    }
  }, []);

  return (
    <div>
      <DashboardPage />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
