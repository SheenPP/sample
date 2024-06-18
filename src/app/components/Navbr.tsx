"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/Features", name: "Features" },
  { path: "/About", name: "About" },
  { path: "/Success Stories", name: "Success Stories" },
  { path: "/Contact", name: "Contact" },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="border-b-2 border-gray-300 p-4 mb-12 sticky top-0 z-100 bg-white flex justify-between items-center">
      <div className="flex items-center">
        <div className="logo mr-4">
          <img src="/sample-app/public/vercel.svg" alt="LoveChat Logo" className="h-10" />
        </div>
      </div>
      <nav className="flex space-x-4">
        {navItems.map((item) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-full text-sm lg:text-base relative no-underline ${
                isActive ? "text-white bg-pink-500" : "text-black bg-gray-200"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="flex gap-2">
        <Link
          href="/signup"
          className="px-4 py-2 rounded-full text-sm lg:text-base text-white bg-pink-500 no-underline"
        >
          Signup
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 rounded-full text-sm lg:text-base text-black bg-gray-200 no-underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
