import { EditUserPage } from "@/components/pages/dashboard/pages/users/editUser";
import Layout from "@/layout";

export default function EditUser() {
  return <EditUserPage />;
}
EditUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
