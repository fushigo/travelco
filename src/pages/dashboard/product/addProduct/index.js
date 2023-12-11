import { AddProductPage } from "@/components/pages/dashboard/pages/product/addProduct";
import Layout from "@/layout";

export default function addProduct() {
  return <AddProductPage />;
}

addProduct.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
