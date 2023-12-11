import { CardProduct } from "@/components/card-product";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ProductPage() {
  const [session, setSession] = useState(false);
  const [productData, setProductData] = useState([]);
  const [userId, setUserId] = useState("");
  const defaultQuantity = "1";
  const Router = useRouter();

  async function getProdutc() {
    const result = await axios.get(
      "https://travelco-api-zeta.vercel.app/api/products/get-product",
      {
        headers: {
          "x-api-key": "travelco2023",
        },
      }
    );
    console.log(result.data.data);
    setProductData(result.data.data);
  }

  useEffect(() => {
    getProdutc();
    setSession(getCookie("session.cookie"));
    setUserId(getCookie("id.cookie"));
  }, []);

  const click = (productId) => {
    if (!session) {
      Router.push("/login");
    } else {
      addCart(userId, productId, defaultQuantity);
    }
  };

  async function addCart(id, productId, quantity) {
    if (!session) {
      Router.push("/login");
    }

    let token = localStorage.getItem("token");
    Swal.fire({
      title: "Apakah anda yakin ?",
      text: "Produk akan dimasukkan kedalam keranjang anda",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Masukan dalam keranjang",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: "POST",
            url: `https://travelco-api-zeta.vercel.app/api/cart/add-cart`,
            headers: {
              Authorization: `Bearer ${token}`,
              "x-api-key": "travelco2023",
            },
            data: {
              id: id,
              productId: productId,
              quantity: quantity,
            },
          });
          Swal.fire({
            title: "Berhasil!",
            text: "Produk berhasil dimasukkan ke keranjang",
            icon: "success",
          });
          Router.reload();
        } catch (error) {
          Swal.fire({
            title: "Gagal!",
            text: "Produk gagal dimasukkan ke keranjang",
            icon: "error",
            timer: 2000,
          });
          console.log(error);
        }
      }
    });
  }

  return (
    <div className="container flex flex-col items-center justify-center bg-white">
      <div>
        <h1 className="text-font font-extrabold text-4xl">
          Temukan{" "}
          <span className="text-secondary">
            Destinasi <br /> Favorit
          </span>{" "}
          Anda!
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full h-auto gap-4 pt-8 md:justify-around">
        {productData.map((productItem, key) => (
          <CardProduct
            key={key}
            title={productItem.nama}
            price={"IDR " + productItem.harga}
            handleClick={() => click(productItem.productId)}
          />
        ))}
      </div>
    </div>
  );
}
