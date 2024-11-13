import { NavBar } from "@/components/navbar"
import { PsiCard } from "@/components/psikologcard"

export default function Home() {
  return(
    <><NavBar />
        <div className="min-w-full h-auto py-10 pb-16 px-10 md:px-20 bg-gradient-to-b from-bg to-white flex-row items-start justify-center text-main">
            <div className="flex-row justify-center items-center my-10 mb-16">
                <h1 className="font-semibold text-4xl text-center my-6">Jadwal Psikolog</h1>
                <h1 className="font-light text-m text-center mb-10">Lihat Jadwal dan Pilih Psikolog yang Tepat untuk Anda.</h1>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-20">
                <PsiCard/>
                <PsiCard/>
                <PsiCard/>
                <PsiCard/>
                <PsiCard/>
                <PsiCard/>

            </div>
        </div>
    </>
  )
}