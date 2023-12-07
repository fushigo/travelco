import Loader from "@/components/common/loader";
import { DashboardPage } from "@/components/pages/dashboard";
import Layout from "@/layout";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const cookies = getCookie("session.cookie");
  const getRole = getCookie("role.cookie");
  const Router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (!cookies || getRole === "USER") {
      Router.push("/");
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <DashboardPage />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
