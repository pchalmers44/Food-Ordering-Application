"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);


  const user = false;
  return (
    <div>
      
    
      <button onClick={() => setOpen(!open)} className="cursor-pointer" aria-label="Toggle menu">
        <Image
          src={open ? "/close.png" : "/open.png"}
          alt=""
          width={20}
          height={20}
        />
      </button>
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-12 w-full h-[calc(100dvh-3rem)] flex flex-col gap-6 items-center justify-center text-2xl z-10 px-4 text-center">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}


          <Link
            href={user ? "/orders" : "login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>
          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
