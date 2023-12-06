import { useEffect, useState } from "react";
import TableThree from "../../components/Tables/TableThree";
import axios from "axios";

export default function UserPage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const result = await axios({
          method: "GET",
          url: "https://travel-api-lac.vercel.app/api/users/get-user",
        });
        console.log(result);
        setUserData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  async function deleteUser(id) {
    try {
      console.log(id);
      await axios({
        method: "DELETE",
        url: `https://travel-api-lac.vercel.app/api/users/delete-user?id=${id}`,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "travelco2023",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <TableThree packageData={userData} handleDelete={deleteUser} />
    </div>
  );
}
