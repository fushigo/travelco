import { CardCart } from "@/components/card-cart";
import axios, { AxiosHeaders } from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [productData, setProductData] = useState({});
  const [hargaProduct, setHargaProduct] = useState([]);
  const [destinasi, setDestinasi] = useState("");
  const [userid, setUserId] = useState("");

  useEffect(() => {
    let id = getCookie("id.cookie");
    setUserId(id);
    async function get() {
      await getUserCart(userid);
    }
    get();
  }, [userid]);

  // useEffect(() => {}, [getUserCart]);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const products = cartData.map((items) => items.product);
    setProductData(products);
  }

  async function getUserCart(id) {
    try {
      const response = await axios.get(
        `https://travelco-api-zeta.vercel.app/api/cart/get-cart-user?id=${id}`
      );
      setCartData(response.data.data.cart);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCart(Id) {
    console.log(Id);

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
          // const response = await axios.delete(
          //   `https://travelco-api-zeta.vercel.app/api/cart/delete-card?id=${userid}&productId=${Id}`
          // );

          await axios({
            method: "DELETE",
            url: `https://travelco-api-zeta.vercel.app/api/cart/delete-card?id=${userid}&productId=${Id}`,
            headers: config,
          });

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

  return (
    <div className="flex flex-col justify-center items-center gap-8 py-16 p-8">
      {cartData.map((items, key) => (
        <CardCart
          key={key}
          destinasi={items?.product?.nama}
          harga={items?.product?.harga}
          quantity={items?.quantity}
          handleDelete={() => deleteCart(items.product.productId)}
        />
      ))}
    </div>
  );
}
