import Link from "next/link";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import Swal from "sweetalert2";

export default function SignUpPage() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [aggre, setAggre] = useState(false);
  const [error, setError] = useState("");

  const Router = useRouter();

  async function Signup(nama, username, email, password) {
    if (!aggre) {
      Swal.fire({
        icon: "error",
        title: "Perhatian!",
        text: "Harap setuju dengan syarat dan ketentuan",
      });
    } else {
      try {
        const response = await axios({
          method: "POST",
          url: "https://travelco-api-zeta.vercel.app/api/users/add-user",
          data: { nama, username, email, password },
          headers: {
            Accept: "application/json",
            "x-api-key": "travelco2023",
          },
        });

        Router.push("/login");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError("Username already used. Please try again");
        } else {
          setError("An error occurred during signup");
        }
        console.log(error);
      }
    }
  }

  function submit(e) {
    e.preventDefault();
    Signup(nama, username, email, password);
  }

  return (
    <div className="bg-slate-100 h-auto text-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          Travelco
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up to create account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              method="POST"
              onSubmit={submit}
            >
              <div>
                <label
                  for="nama"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  onChange={(e) => setNama(e.target.value)}
                  type="text"
                  name="nama"
                  id="nama"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name"
                  required=""
                />
              </div>
              <div>
                {error && (
                  <div className="text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="John Doe "
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div>
                {error && (
                  <div className="text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-90"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      className="bg-white"
                      onChange={(e) => setAggre(e.target.checked)}
                      id="accept"
                      defaultChecked
                    />
                    <Label htmlFor="accept" className="flex">
                      I agree with the&nbsp;
                      <a
                        href="#"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        terms and conditions
                      </a>
                    </Label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500">
                Alerady have an account ?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline text-secondary"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
