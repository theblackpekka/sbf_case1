import React from "react";
export const NavBar = () => {
  return(
    <nav className="min-w-full px-10 md:px-20 py-2 gap-2 md:gap-0 container flex items-center justify-center md:justify-between flex-wrap bg-white drop-shadow-gray-500 drop-shadow-md drop-shadow-blur-sm">
        <div className="text-main order-1 flex items-center justify-between flex-wrap gap-2 md:gap-4">
          
          {/* INI NANTI DIGANTI LOGO */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 order-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
          </svg>

          <h1 className="order-2 font-bold tracking-wider">Klinik Psikologi Sejahtera</h1>
        </div>
        <div className="order-1 md:order-2 gap-4 md:gap-10 flex items-center justify-between flex-wrap text-sm font-normal text-main">
          <div className=" hover:text-gray-700"><a href="/">Beranda</a></div>
          <div className=" hover:text-gray-700"><a href="/jadwal-psikolog">Jadwal</a></div>
          <button className="px-5 py-3 bg-main hover:bg-gray-700 text-sm text-gray-50 rounded-full flex items-center gap-2">
              Login
          </button>
        </div>
    </nav>
  )
}