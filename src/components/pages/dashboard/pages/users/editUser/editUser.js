import axios from "axios";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function EditUserPage() {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const Router = useRouter();

  const id = Router.query;
  const userId = id.id;

  async function getUserById(id) {
    try {
      const userData = await axios({
        method: "GET",
        url: `https://travelco-api-zeta.vercel.app/api/users/get-user-id?id=${id}`,
        headers: {
          "x-api-key": "travelco2023",
        },
      });
      setNama(userData.data.data.nama);
      setUsername(userData.data.data.username);
      setEmail(userData.data.data.email);
      setPassword(userData.data.data.password);
      setRole(userData.data.data.role);
      console.log(userData.data.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(nama, username, email, password, role) {
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
      role: role,
    };

    try {
      const response = await axios.put(
        `https://travelco-api-zeta.vercel.app/api/users/update-user?id=${userId}`,
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
    editUser(nama, username, email, password, role);
  }

  async function getData() {
    await getUserById(userId);
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="role" value="role" />
          </div>
          <Select
            onChange={(e) => setRole(e.target.value)}
            id="role"
            value={role}
            required
          >
            <option>ADMIN</option>
            <option>USER</option>
          </Select>
        </div>
        <Button className="text-white bg-secondary" type="submit">
          Edit
        </Button>
      </form>
    </div>
  );
}
