import axios from "axios";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
              <Label htmlFor="username" value="username" />
            </div>
            <TextInput
              onChange={(e) => setUsername(e.target.value)}
              id="username"
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
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            value={email}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="password" />
          </div>
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            value={password}
            required
          />
        </div>
        <Button className="text-white bg-secondary" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}
