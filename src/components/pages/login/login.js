import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Router = useRouter();

  async function Login(username, password) {
    try {
      const response = await axios({
        method: "POST",
        url: "https://travelco-api-zeta.vercel.app/api/auth/login",
        data: { username, password },
        headers: {
          Accept: "application/json",
          "x-api-key": "travelco2023",
        },
      });

      console.log(response.data.token);
      const cookies = response.data.token;
      const roleCookies = response.data.data.role;

      const expired = new Date();
      expired.setSeconds(expired.getSeconds() + 30000000000000);

      setCookie("session.cookie", cookies, {
        expires: expired,
      });

      setCookie("role.cookie", roleCookies, {
        expires: expired,
      });

      const admiRole = getCookie("role.cookie");

      const id = response.data.data.id;

      if (admiRole === "ADMIN") {
        console.log(response.data.data.id);
        setCookie("id.cookie", id);
        Router.push(`/dashboard`);
      } else {
        Router.push({ pathname: "/" });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Incorrect username or password");
      } else {
        setError("An error occurred during login");
      }
      console.log(error);
    }
  }

  function submit(e) {
    e.preventDefault();
    Login(username, password);
  }

  return (
    <div className="bg-slate-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Travelco
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              method="POST"
              onSubmit={submit}
            >
              <div>
                {error && (
                  <div className="text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
