import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [header, setHeader] = useState(false);

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
          ? "fixed w-full flex border-b-2 z-50 border-gray-200 bg-white"
          : "flex fixed w-full bg-white"
      }
    >
      <div className="navbar">
        <div className="navbar-start">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white">
              <li>
                <a>Beranda</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li className="border-2 rounded-xl flex flex-row relative">
                <input type="text" placeholder="🔍 Cari destinasimu..." />
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-black">Travelco</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="border-2 rounded-xl flex flex-row relative">
              <input type="text" placeholder="🔍 Cari destinasimu..." />
            </li>
            <li>
              <Link href={"/#home"}>Beranda</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/product"}>Product</Link>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}
