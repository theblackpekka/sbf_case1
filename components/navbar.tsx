import React from "react";
export const NavBar = () => {
  return(
    <nav className="bg-white shadow-gray-300 w-100 px-8 ">
      <div className="py-2 px-4 container flex items-center justify-between flex-wrap ">
        <div className="text-main order-1  flex items-center justify-between flex-wrap gap-4">
          
          {/* INI NANTI DIGANTI LOGO */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 order-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
          </svg>

          <h1 className="order-2 font-semibold">Klinik Psikologi Sejahtera</h1>
        </div>
        <div className="order-2 gap-10 flex items-center justify-between flex-wrap text-sm font-thin text-main">
          <div className=" hover:text-gray-700"><a href="#">Beranda</a></div>
          <div className=" hover:text-gray-700"><a href="#">Jadwal</a></div>
          <button className="px-4 py-2 bg-main hover:bg-gray-700 text-sm text-gray-50 rounded-full flex items-center gap-2">
              Login
          </button>
        </div>
      </div>
    </nav>
  )
}