import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
            Lulusan S1 Teknik Informatika dengan gelar Sarjana Komputer, 
            yang memiliki keterampilan dalam bidang komputer. 
            Berpengalaman dalam mengelola komputer baik perangkat keras dan perangkat lunaknya secara efektif. 
            Telah mengikuti berbagai kursus untuk memperkuat kemampuan profesional dalam bidang komputer. 
            </p>
            <br />
            <p>
              Anda bisa mendownload CV saya untuk informasi lebih detail.
            </p>
            <div className="">
              <a
                href="/cv-akbarnasa.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download CV
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
