import { EditProductPage } from "@/components/pages/dashboard/pages/product/editProduct";
import Layout from "@/layout";

export default function EditProduct() {
  return <EditProductPage />;
}

EditProduct.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};