import { CardProduct } from "@/components/card-product";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [session, setSession] = useState(false);
  const [productData, setProductData] = useState([]);

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
  }, []);

  const click = () => {
    if (!session) {
      alert("anda belum login");
    } else {
      alert("anda sudah login");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center">
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
            handleClick={click}
          />
        ))}
      </div>
    </div>
  );
}
