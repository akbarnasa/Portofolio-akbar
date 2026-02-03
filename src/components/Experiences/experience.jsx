import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-slate-800 dark:text-white"
    >
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Judul besar EXPERIENCE */}
          <div className="sm:order-2 font-bold relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              EXPER.
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Experience
            </h1>
          </div>

          {/* Daftar pengalaman */}
          <div className="text-slate-600 dark:text-slate-300 sm:order-1 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Pengalaman Kerja</h2>

            {/* PKL */}
            <div>
              <p className="font-semibold">
                Praktik Kerja Lapangan – PT Jerbee Indonesia
              </p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-1">
                Oktober 2019 – Desember 2019
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Membuat IoT berupa auto locker untuk project akhir PKL
                </li>
              </ul>
            </div>

            {/* Instruktur & Teknisi */}
            <div>
              <p className="font-semibold">
                Instruktur dan Teknisi Komputer – Bandung Computer Education
              </p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-1">
                Maret 2022 – Juni 2022
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Mengajar aplikasi Microsoft Office (Word dan PowerPoint)</li>
                <li>Memperbaiki komputer yang bermasalah</li>
                <li>Instalasi komputer</li>
              </ul>
            </div>

            {/* Asisten Lab */}
            <div>
              <p className="font-semibold">
                Asisten Laboratorium Komputer FTI – Universitas Bale Bandung
              </p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-1">
                September 2025 – Februari 2026
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Menyusun materi perkuliahan praktikum</li>
                <li>
                  Mengajar mata kuliah praktikum Aplikasi Dasar Komputer
                  (Word, PowerPoint, Canva, Trello, Google Drive)
                </li>
                <li>Menjadi asisten dalam workshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
