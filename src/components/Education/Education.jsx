import React from "react";

const Education = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            EDUCAT.
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Education
            </h1>
          </div>

          <div className="space-y-6">
          {/* Judul */}
          <h2 className="text-xl font-semibold mb-2">Riwayat Pendidikan</h2>
          {/* SMK */}
          <div>
            <p className="font-semibold">
              SMK PLUS PRATAMA ADI <span className="font-normal">| 2021</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Teknik Komputer dan Jaringan
            </p>
          </div>

          {/* S1 */}
          <div>
            <p className="font-semibold">
              Universitas Bale Bandung <span className="font-normal">| 2025</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              S1 – Teknik Informatika
            </p>
          </div>

          {/* S2 */}
          <div>
            <p className="font-semibold">
              Universitas Langlangbuana <span className="font-normal">| 2025</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              S2 – Magister Teknik Informatika{" "}
              <span className="italic">(Sedang menempuh)</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
