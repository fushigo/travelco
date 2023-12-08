import axios from "axios";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");

  const Router = useRouter();

  async function createUser(nama, harga) {
    let headers = {
      "x-api-key": "travelco2023",
    };
    let token = localStorage.getItem("token");

    if (token !== null) headers.Authorization = `Bearer ${token}`;

    let data = {
      nama: nama,
      harga: harga,
    };

    try {
      const response = await axios.post(
        `https://travelco-api-zeta.vercel.app/api/products/add-product`,
        data,
        {
          headers: headers,
        }
      );
      console.log(response);
      Swal.fire({
        title: "Success",
        text: "Berhasil menambahkan data!",
        icon: "success",
        timer: 2000,
      });
      Router.push({ pathname: "/dashboard/product" });
    } catch (error) {
      return error.response;
    }
  }

  function submit(e) {
    e.preventDefault();
    createUser(nama, harga);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={submit}
        className="fle flex-col max-w-xl space-y-8 w-full bg-white p-8 rounded-xl"
      >
        <div className="flex flex-row gap-x-8">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nama" value="nama" />
            </div>
            <TextInput
              onChange={(e) => setNama(e.target.value)}
              id="nama"
              type="text"
              placeholder="name"
              value={nama}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="harga" value="harga" />
            </div>
            <TextInput
              onChange={(e) => setHarga(e.target.value)}
              id="harga"
              type="text"
              placeholder="harga"
              value={harga}
              pattern="[0-9]*"
              required
            />
          </div>
        </div>
        <Button className="text-white bg-secondary" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}
