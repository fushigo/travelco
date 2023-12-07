import Loader from "@/components/common/loader";
import { DashboardPage } from "@/components/pages/dashboard";
import { UserPage } from "@/components/pages/dashboard/pages/users";
import Layout from "@/layout";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboardUser() {
  const cookies = getCookie("session.cookie");
  const getRole = getCookie("role.cookie");
  const Router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (!cookies || getRole === "USER") {
      Router.push({ pathname: "/" });
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <UserPage />
    </div>
  );
}

DashboardUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
