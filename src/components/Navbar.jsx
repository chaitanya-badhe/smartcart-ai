import { Search ,ShoppingCart, User , MapPin  } from "lucide-react";

import React from 'react'

const Navbar = () => {
  return (
  <>
  <div className="flex items-center justify-between bg-red-500">

    <div className="flex flex-col">
      <h1>
        SmartCart <span className="text-sky-500">AI</span>
      </h1>
      <span>Shop Smarter. Live Better</span>
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Search />
      <input
        type="text"
        placeholder="search for products, brands and more.."
      />
    </div>

    <div className="flex gap-3">
      <ShoppingCart className="cursor-pointer" />
      <User className="cursor-pointer" />
    </div>

  </div>
  </>
)
}

export default Navbar


