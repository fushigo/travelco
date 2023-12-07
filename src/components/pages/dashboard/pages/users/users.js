import { useEffect, useState } from "react";
import TableThree from "../../components/Tables/TableThree";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserPage() {
  const [userData, setUserData] = useState([]);

  const Router = useRouter();

  useEffect(() => {
    async function getUser() {
      let headers = {};

      let token = localStorage.getItem("token");
      if (token !== null) headers.Authorization = `Bearer ${token}`;

      let config = {
        headers: headers,
      };

      try {
        const response = await axios.get(
          "https://travelco-api-zeta.vercel.app/api/users/get-user",
          config
        );
        // setUserData(response.data);
        console.log(response.data.data);
        setUserData(response.data.data);
      } catch (error) {
        return error.response;
      }
    }

    getUser();
  }, []);

  async function deleteUser(id) {
    let headers = {
      "x-api-key": "travelco2023",
    };
    let token = localStorage.getItem("token");

    if (token !== null) headers.Authorization = `Bearer ${token}`;

    let config = {
      headers: headers,
    };

    try {
      const response = await axios.delete(
        `https://travelco-api-zeta.vercel.app/api/users/delete-user?id=${id}`,
        config
      );
      Router.reload({ pathname: "/" });
    } catch (error) {
      return error.response;
    }
  }

  function EditUser(id) {
    console.log(id);
    Router.push(`/dashboard/users/editUser?id=${id}`);
  }

  function CreateUser() {
    Router.push("/dashboard/users/addUser");
  }

  return (
    <div>
      <TableThree
        packageData={userData}
        handleDelete={deleteUser}
        handleEdit={EditUser}
        handleCreate={CreateUser}
      />
    </div>
  );
}
