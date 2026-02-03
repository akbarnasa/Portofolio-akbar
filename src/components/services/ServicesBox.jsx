import React from "react";
import {
  MdBrush,
  MdWeb,
  MdBuild,
  MdOutlinePictureAsPdf,
} from "react-icons/md";


const Services = [
  {
    name: "Desain Grafis",
    description:
      "Membuat tampilan visual yang rapi dan konsisten, mulai dari layout, warna, hingga tipografi untuk kebutuhan konten, presentasi dan materi promosi.",
      image: "https://picsum.photos/seed/design/400/260",
      icon: <MdBrush className="text-4xl" />,          
      bgColor: "bg-cyan-500/80",
  },
  {
    name: "Web Development",
    description:
      "Membangun dan mengelola website sederhana hingga menengah, mulai dari struktur halaman, styling, sampai integrasi fungsi dasar sesuai kebutuhan pengguna.",
      image: "https://picsum.photos/seed/webdev/400/260",
      icon: <MdWeb className="text-4xl" />,
      bgColor: "bg-fuchsia-500/80",
  },
  {
    name: "Troubleshooting software & hardware",
    description:
      "Mendiagnosis dan menyelesaikan masalah pada aplikasi dan perangkat komputer, seperti error sistem, instalasi, konfigurasi, serta gangguan perangkat.",
      image: "https://picsum.photos/seed/support/400/260",
      icon: <MdBuild className="text-4xl" />,
      bgColor: "bg-slate-500/80",
  },
  {
    name: "Microsoft Office",
    description:
      "Microsoft Office: Menggunakan Word, Excel dan PowerPoint untuk pengetikan dokumen, pengolahan data dan pembuatan presentasi yang terstruktur dan profesional.",
      image: "https://picsum.photos/seed/office/400/260",
      icon: <MdOutlinePictureAsPdf className="text-4xl" />,
      bgColor: "bg-teal-500/80",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
