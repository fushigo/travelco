import axios from "axios";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function EditProductPage() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");

  const Router = useRouter();

  const id = Router.query;
  const productId = id.id;

  async function getUserById(id) {
    try {
      const productData = await axios({
        method: "GET",
        url: `https://travelco-api-zeta.vercel.app/api/products/get-product-id?id=${id}`,
        headers: {
          "x-api-key": "travelco2023",
        },
      });
      setNama(productData.data.data.nama);
      setHarga(productData.data.data.harga);
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(nama, harga) {
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
      const response = await axios.put(
        `https://travelco-api-zeta.vercel.app/api/products/update-product?id=${productId}`,
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
      Router.push("/dashboard/product");
    } catch (error) {
      return error.response;
    }
  }

  function submit(e) {
    e.preventDefault();
    editProduct(nama, harga);
  }

  async function getData() {
    await getUserById(productId);
  }

  useEffect(() => {
    getData();
  }, []);

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
              type="number"
              placeholder="harga"
              value={harga}
              required
            />
          </div>
        </div>

        <Button className="text-white bg-secondary" type="submit">
          Edit
        </Button>
      </form>
    </div>
  );
}
