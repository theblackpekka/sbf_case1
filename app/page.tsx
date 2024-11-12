import { NavBar } from "@/components/navbar"

export default function Home() {
  return(
    <><NavBar />
    <div className="min-w-full h-svh px-10 md:px-20 bg-gradient-to-b from-bg to-white z-1 flex items-start md:items-center justify-between text-main">
      <div className="w-100% md:w-2/5 h-auto justify-center my-10 md:my-15">
        <div className="font-medium text-sm md:text-m">Menuju Kesehatan Mental yang Lebih Baik</div>
        <div className="font-bold text-4xl md:text-4xl tracking-wide md:leading-tight mt-2 mb-4">Selamat Datang di Klinik Psikologi Sejahtera</div>
        <div className="font-normal text-sm md:text-m tracking-wide leading-7">Di Klinik Psikologi Sejahtera, kami menawarkan layanan konsultasi psikologi profesional yang dapat Anda pesan sesuai kebutuhan. Platform kami memungkinkan Anda untuk menjadwalkan sesi, melihat profil psikolog, dan menerima pengingat untuk pengalaman yang lebih nyaman.</div>
        <button className="py-2 px-4 mt-6 border-main border-2 rounded-full">
          Lihat Jadwal
        </button>
      </div>
      <div className="hidden md:flex  md:w-3/5 h-auto justify-center">
        <h1>gambar</h1>
      </div>
    </div></>
  )
}