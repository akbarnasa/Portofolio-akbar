import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Judul besar SKILLS */}
          <div className="sm:order-2 font-bold relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKIL.
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>

        
          {/* Daftar skill */}
          <div className="text-slate-600 dark:text-slate-300 sm:order-1 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Keahlian Utama</h2>

            {/* Office */}
            <div>
              <p className="font-semibold">Microsoft Office</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Word, Excel dan PowerPoint untuk dokumen, tabel dan presentasi
              </p>
            </div>

            {/* Data */}
            <div>
              <p className="font-semibold">Input & pengelolaan data</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pengolahan data secara rapi, terstruktur dan mudah dibaca
              </p>
            </div>

            {/* Laporan */}
            <div>
              <p className="font-semibold">Penyusunan laporan administrasi</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Menyusun laporan dari pengumpulan data hingga format siap cetak
              </p>
            </div>

            {/* Desain */}
            <div>
              <p className="font-semibold">Desain</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Desain dasar untuk kebutuhan konten digital dan presentasi
              </p>
            </div>

            {/* Troubleshooting */}
            <div>
              <p className="font-semibold">Troubleshooting aplikasi</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Mengatasi kendala penggunaan software dan konfigurasi sederhana
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
