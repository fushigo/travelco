import { CardHistory } from "@/components/card-history";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function HistoryPage() {
  const Router = useRouter();
  const [userId, setUserId] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let session = getCookie("session.cookie");
    if (!session) {
      Router.push("/login");
    }
  }, []);

  useEffect(() => {
    let id = getCookie("id.cookie");
    setUserId(id);
    getHistoryData(userId);
  }, [userId]);

  async function getHistoryData(userId) {
    try {
      const response = await axios({
        method: "GET",
        url: `https://travelco-api-zeta.vercel.app/api/histories/get-histories?userId=${userId}`,
        headers: {
          "x-api-key": "travelco2023",
        },
      });
      setHistory(response.data.data.history);
      //   setHistory(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteHistory(cartId) {
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
            url: `https://travelco-api-zeta.vercel.app/api/histories/delete-histories?userId=${userId}&cartId=${cartId}`,
            headers: {
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

  // url: `https://travelco-api-zeta.vercel.app/api/histories/delete-histories?userId=${userId}&cartId=${cartId}`,
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-16 p-8">
      {history.map((value, key) => (
        <CardHistory
          key={key}
          destinasi={value?.cart?.product?.nama}
          harga={value?.cart?.product?.harga}
          quantity={value?.cart?.quantity}
          handleDelete={() => deleteHistory(value?.cart?.cartId)}
        />
      ))}
    </div>
  );
}
