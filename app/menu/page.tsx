import React from 'react'
import { menu } from '../data';
import Link from "next/link";

const MenuPage = () => {
  return (
        <div className="p-4 lg:px-20 xl:px-40 min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-6rem)] flex flex-col md:flex-row items-stretch">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full min-h-55 bg-cover bg-center p-6 md:min-h-80"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-full sm:w-2/3 lg:w-1/2`}>
            <h1 className="uppercase font-bold text-2xl md:text-3xl">{category.title}</h1>
            <p className="text-sm my-6 md:my-8">{category.desc}</p>
            <button className={`bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage