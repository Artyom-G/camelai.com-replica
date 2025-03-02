"use client";

export default function Navbar() {
  return (
    <div className="fixed top-2 left-0 right-0 mx-[12px] 
                    bg-black/10 backdrop-blur-md text-white font-semibold 
                    rounded-lg transition-all duration-700 ease-in-out z-10 h-[49px] align-middle pt-1">
      <div className="max-w-[1390px] mx-auto flex justify-between items-center px-6 py-2 align-middle">
        <a className="text-2xl font-bold" >
          camelAI
        </a>

        <div className="space-x-6 align-middle">
          <a className="nav-hover transition-colors duration-300 relative pb-1">
            Blog
          </a>
          <a className="nav-hover transition-colors duration-300 relative pb-1">
            Pricing
          </a>
          <a className="nav-hover transition-colors duration-300 relative pb-1">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
