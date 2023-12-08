import { useEffect, useState } from "react";
import ProductTable from "../../components/Tables/TableProduct";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

export default function DashboardProductPage() {
  const [productData, setProductData] = useState([]);

  const Router = useRouter();

  useEffect(() => {
    async function getProduct() {
      let headers = {};

      let token = localStorage.getItem("token");
      if (token !== null) headers.Authorization = `Bearer ${token}`;

      let config = {
        headers: headers,
      };

      try {
        const response = await axios.get(
          "https://travelco-api-zeta.vercel.app/api/products/get-product",
          config
        );
        console.log(response.data.data);
        setProductData(response.data.data);
      } catch (error) {
        return error.response;
      }
    }
    getProduct();
  }, []);

  async function deletepProduct(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let headers = {
          "x-api-key": "travelco2023",
        };
        let token = localStorage.getItem("token");

        if (token !== null) headers.Authorization = `Bearer ${token}`;

        let config = {
          headers: headers,
        };

        try {
          const response = await axios.delete(
            `https://travelco-api-zeta.vercel.app/api/products/delete-product?id=${id}`,
            config
          );
          Router.reload({ pathname: "/" });
        } catch (error) {
          return error.response;
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  async function AddProduct() {
    Router.push("/dashboard/product/addProduct");
  }

  return (
    <div>
      <ProductTable
        packageData={productData}
        handleDelete={deletepProduct}
        handleCreate={AddProduct}
      />
    </div>
  );
}
