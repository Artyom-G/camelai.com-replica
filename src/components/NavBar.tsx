"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-0 right-0 mx-[12px] 
                    bg-black/10 backdrop-blur-md text-white font-semibold 
                    rounded-lg transition-all duration-700 ease-in-out z-10 h-[49px] align-middle pt-1">
      <div className="max-w-[1390px] mx-auto flex justify-between items-center px-6 py-2 align-middle">
        <Link href="/" className="text-2xl font-bold" >
          <img src="https://camelai.com/assets/images/main-camelai.png" alt="camelAI logo" 
                className="w-[96px]"/>
        </Link>

        <div className="space-x-6 align-middle">
          <Link href="/blog" className="hover:text-gray-300 transition-colors duration-300">
            Blog
          </Link>
          <Link href="/Pricing" className="hover:text-gray-300 transition-colors duration-300">
            Pricing
          </Link>
          <Link href="/login" className="hover:text-gray-300 transition-colors duration-300">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
