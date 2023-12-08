import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const Router = useRouter();

  useEffect(() => {
    setSession(getCookie("session.cookie"));
    setRole(getCookie("role.cookie"));
  }, []);

  const handleClick = () => {
    deleteCookie("session.cookie");
    deleteCookie("role.cookie");
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
          : "flex fixed w-full bg-white"
      }
    >
      <div className="navbar bg-white">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Beranda</Link>
            </li>
            <li>
              <Link href={"/product"}>Product</Link>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Travelco</a>
          <div className="navbar-center hidden w-full items-center justify-center lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Beranda</Link>
              </li>
              <li>
                <Link href={"/product"}>Product</Link>
              </li>
              <li>
                <a>Item 3</a>
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
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
                  <Link className="btn" href={"/login"}>
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
