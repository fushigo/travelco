import axios from "axios";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function CreateUserPage() {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Router = useRouter();

  async function createUser(nama, username, email, password) {
    let headers = {
      "x-api-key": "travelco2023",
    };
    let token = localStorage.getItem("token");

    if (token !== null) headers.Authorization = `Bearer ${token}`;

    let data = {
      nama: nama,
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `https://travelco-api-zeta.vercel.app/api/users/add-user`,
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
      Router.push({ pathname: "/dashboard/users" });
    } catch (error) {
      return error.response;
    }
  }

  function submit(e) {
    e.preventDefault();
    createUser(nama, username, email, password);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-100 dark:bg-boxdark-2">
      <form
        onSubmit={submit}
        className="fle flex-col max-w-xl space-y-8 w-full bg-white p-8 rounded-xl shadow-2xl text-black dark:bg-boxdark dark:text-white"
      >
        <div className="flex flex-row gap-x-8">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nama" value="nama" />
            </div>
            <input
              onChange={(e) => setNama(e.target.value)}
              id="nama"
              type="text"
              className="bg-white p-2 border-2 rounded-lg border-slate-300 dark:bg-boxdark dark:border-slate-500"
              placeholder="name"
              value={nama}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="username" />
            </div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              className="bg-white p-2 border-2 rounded-lg border-slate-300 dark:bg-boxdark dark:border-slate-500"
              type="text"
              placeholder="username"
              value={username}
              required
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="email" />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email1"
            type="email"
            className="bg-white p-2 border-2 rounded-lg border-slate-300 dark:bg-boxdark dark:border-slate-500"
            placeholder="name@flowbite.com"
            value={email}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="password" />
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="bg-white p-2 border-2 rounded-lg border-slate-300 dark:bg-boxdark dark:border-slate-500"
            type="password"
            theme={"bg-white"}
            value={password}
            required
          />
        </div>
        <Button
          className="text-white bg-secondary dark:bg-boxdark"
          type="submit"
        >
          Create
        </Button>
      </form>
    </div>
  );
}
