import Loader from "@/components/common/loader";
import { DashboardPage } from "@/components/pages/dashboard";
import {
  DashboardProductPage,
  ProductPage,
} from "@/components/pages/dashboard/pages/product";
import { UserPage } from "@/components/pages/dashboard/pages/users";
import Layout from "@/layout";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboardProduct() {
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
      <DashboardProductPage />
    </div>
  );
}

DashboardProduct.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
