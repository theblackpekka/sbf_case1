import React from "react";

export const PsiCard = () => {
    return(
        <div className="p-5 flex-row justify-center items-centers gap-10 text-main bg-white rounded-2xl drop-shadow-gray-300 drop-shadow-lg">
            <div className="flex justify-start items-center">
                <div className="w-3/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 order-1" fill="none" viewBox="0 0 24 24"stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    </svg>
                </div>
                <div className="w-7/10 flex-row ml-8">
                    <h1 className="font-bold text-sm ">
                        Nama Psikolog
                    </h1>
                    <h1 className="font-light text-xs">
                        Psikolog Anak Dan Remaja
                    </h1>
                </div>
            </div>
            <ul className="my-8 font-light text-sm">
                <li className="flex items-center my-1">
                    <div className="w-1/8 bg-main mr-3">l</div>
                    <h1>
                        Senin
                    </h1>
                    <h1 className="ml-10 p-1 rounded-sm bg-main text-white">
                        10:00-18:00
                    </h1>
                </li>
                <li className="flex items-center my-1">
                    <div className="w-1/8 bg-main mr-3">l</div>
                    <h1>
                        Senin
                    </h1>
                    <h1 className="ml-10 p-1 rounded-sm bg-main text-white">
                        10:00-18:00
                    </h1>
                </li>
                <li className="flex items-center my-1">
                    <div className="w-1/8 bg-main mr-3">l</div>
                    <h1>
                        Senin
                    </h1>
                    <h1 className="ml-10 p-1 rounded-sm bg-main text-white">
                        10:00-18:00
                    </h1>
                </li>
            </ul>
            <div className="w-auto flex justify-between items-center">
                <button className="py-1 px-4 text-thin text-sm border-main border-[1px] rounded-xl">
                    Lihat Jadwal
                </button>
                <button className="py-1 px-4 text-thin text-sm border-main border-[1px] rounded-xl">
                    Detail Psikolog
                </button>
            </div>
        </div>
    )
}