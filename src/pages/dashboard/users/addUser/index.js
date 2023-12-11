import { CreateUserPage } from "@/components/pages/dashboard/pages/users/createUser";
import Layout from "@/layout";

export default function CreateUser() {
  return <CreateUserPage />;
}
CreateUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
