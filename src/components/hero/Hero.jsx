import React from "react";
import personImg from "../../assets/br.png";

const Hero = () => {
  return (
    <>
        <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            {/* Kiri: Hello + heading */}
            <div className="space-y-3 text-center md:text-left">
              <p className="uppercase tracking-wide text-sm md:text-base">Halo, Saya</p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black/80 dark:text-white">
                Akbar Nasa
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-white">
                Freelance web & <br className="hidden sm:block" /> Pengajar
              </p>
            </div>

            {/* Tengah: gambar */}
            <div className="flex justify-center order-first md:order-none mb-6 md:mb-0">
              <div className="relative w-40 sm:w-48 md:w-56 lg:w-64">
                {/* blob background */}
                <div className="absolute -left-5 top-4 w-full h-full bg-primary/80 rounded-[40%] blur-sm -z-10" />

                {/* foto */}
                <img
                  src={personImg}
                  alt="Akbar Nasa"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Kanan: deskripsi + tombol */}
            <div className="space-y-4 text-center md:text-right">
              <p className="text-sm sm:text-base md:text-lg text-black/75 dark:text-white/70">
              Ayo diskusikan bagaimana saya bisa membantu mengembangkan bisnismu.
              </p>
              <div>
                <a
                  href="mailto:akbarnasa5@gmail.com"
                  className="inline-block primary-btn !my-3"
                >
                  Hubungi saya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Hero;
