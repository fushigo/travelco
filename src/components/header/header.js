import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import logo from "@/asset/TRAVELCO-F.svg";
import Image from "next/image";
import axios from "axios";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [session, setSession] = useState(null);
  const [idCookie, setIdCookie] = useState("");
  const [role, setRole] = useState(null);
  const [userCart, setUserCart] = useState(null);
  const [cartCount, setCartCount] = useState("0");
  const [cartPayment, setCartPayment] = useState("0");
  const Router = useRouter();

  useEffect(() => {
    async function getCartData(id) {
      const userId = id;

      // console.log(userId);

      try {
        const response = await axios.get(
          `https://travelco-api-zeta.vercel.app/api/cart/get-cart-user?id=${userId}`
        );
        setUserCart(response.data.data);
        setCartCount(response.data.totalCartData);
        setCartPayment(response.data.payment);
      } catch (error) {
        console.log(error);
      }
    }

    getCartData(idCookie);
  }, [cartCount, cartPayment]);

  useEffect(() => {
    setSession(getCookie("session.cookie"));
    setRole(getCookie("role.cookie"));
    setIdCookie(getCookie("id.cookie"));
  }, []);

  const handleCartClick = () => {
    if (!session) {
      Router.push("/login");
    } else {
      Router.push("/cart");
    }
  };

  const handleClick = () => {
    deleteCookie("session.cookie");
    deleteCookie("role.cookie");
    deleteCookie("id.cookie");
    localStorage.removeItem("token");
    Router.push({ pathname: "/" });
    Router.reload({ pathname: "/" });
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  });

  return (
    <div
      className={
        header
          ? "fixed w-full flex border-b-2 border-slate-300 z-50 border-gray-200 bg-white"
          : "flex fixed w-full bg-white z-50"
      }
    >
      <div className="navbar bg-white">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Beranda</Link>
            </li>
            <li>
              <Link href={"/product"}>Product</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl w-[170px] h-[50px] z-99"
          >
            <Image className="w-full" src={logo} />
          </Link>
          <div className="navbar-center hidden w-full items-center -ml-34 justify-center lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Beranda</Link>
              </li>
              <li>
                <Link href={"/product"}>Product</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartCount}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-white">
                <span className="font-bold text-lg">{cartCount} Items</span>
                <span className="text-info">Subtotal: IDR {cartPayment}</span>
                <div className="card-actions">
                  <button
                    onClick={handleCartClick}
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {session && role === "ADMIN" ? (
                <div className="flex flex-col gap-4">
                  <Link className="btn" href={"/dashboard"}>
                    Dashboard
                  </Link>
                  <a className="btn" onClick={handleClick}>
                    Logout
                  </a>
                </div>
              ) : role === "USER" ? (
                <a className="btn" onClick={handleClick}>
                  Logout
                </a>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link className="btn" href={"/login"}>
                    Login
                  </Link>
                  <Link className="btn" href={"/signup"}>
                    SignUp
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
