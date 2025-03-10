"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
    return (
        <nav className="fixed top-2 left-0 right-0 mx-[12px] 
                        bg-black/10 backdrop-blur-md text-white font-semibold 
                        rounded-lg transition-all duration-700 ease-in-out z-10 h-[49px] align-middle pt-1">
          <div className="max-w-[1390px] mx-auto flex justify-between items-center px-6 py-2 align-middle">
            <Link href="/" className="text-2xl font-bold" >
              <Image src="https://camelai.com/assets/images/main-camelai.png" alt="camelAI logo"  width={96} height={10}></Image>
            </Link>
    
            <div className="space-x-6 align-middle">
              <Link href="/" className="nav-hover transition-colors duration-300 relative pb-1">
                Blog
              </Link>
              <Link href="/" className="nav-hover transition-colors duration-300 relative pb-1">
                Pricing
              </Link>
              <Link href="/" className="nav-hover transition-colors duration-300 relative pb-1">
                Log In
              </Link>
            </div>
          </div>
        </nav>
      );
}
