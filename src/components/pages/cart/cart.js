import { CardCart } from "@/components/card-cart";
import axios, { AxiosHeaders } from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [productData, setProductData] = useState({});
  const [hargaProduct, setHargaProduct] = useState([]);
  const [destinasi, setDestinasi] = useState("");
  const [session, setSession] = useState(null);
  const [userid, setUserId] = useState("");
  const sessionCookie = getCookie("session.cookie");
  const Router = useRouter();
  const defaultQuantity = "1";

  useEffect(() => {
    let id = getCookie("id.cookie");
    setSession(sessionCookie);
    setUserId(id);
    async function get() {
      await getUserCart(userid);
    }
    get();
  }, [userid]);

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
    console.log("productId" + Id);
    console.log("userId" + userid);

    let token = localStorage.getItem("token");

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
        try {
          await axios({
            method: "DELETE",
            url: `https://travelco-api-zeta.vercel.app/api/cart/delete-card?id=${userid}&productId=${Id}`,
            headers: {
              Authorization: `Bearer ${token}`,
              "x-api-key": "travelco2023",
            },
          });

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          Router.reload();
        } catch (error) {
          console.log(error);
        }
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
