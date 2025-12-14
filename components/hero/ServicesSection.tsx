import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../constants";

export const ServicesSection = () => {
  return (
    <section className="container mx-auto font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#444] font-sans text-[42px] font-extrabold leading-11.5 text-center max-w-4xl mx-auto mb-16"
        >
          Servicios Oncológicos
        </motion.h2>

        {/* Grid de servicios con imágenes */}
        <div className="grid md:grid-cols-4 gap-6 md:px-32 mb-16 ">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative h-100 rounded-lg overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 duration-300 "
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <Image
                  src={service.href}
                  alt={service.title}
                  layout="fill"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20 group-hover:from-orange-400/80 group-hover:via-orange-500/50 transition-all duration-700"></div>

              {/* Contenido */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-extralight text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 max-h-0 opacity-0 overflow-hidden group-hover:max-h-50 group-hover:opacity-100 transition-all duration-700 ">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto descriptivo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-gray-600 text-center max-w-3xl tracking-wider leading-tight font-extralight mx-auto text-lg mb-10"
        >
          Estamos listos para acompañarte en cada paso de tu tratamiento. Agenda
          una consulta gratuita para conocer cuál de nuestros servicios es el
          más adecuado para ti.
        </motion.p>

        {/* Botones de CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-row items-center justify-center gap-4"
        >
          <Link
            href={""}
            className="bg-green-700 text-sm ring-green-700 text-white px-4 py-1 rounded-full hover:bg-green-800 transition inline-flex items-center gap-5 w-44 "
          >
            <span className="">Contáctanos</span>
            <div className="rounded-full p-2 bg-white/10">
              <CalendarDays className="size-5" />
            </div>
          </Link>
          <Link
            href="/servicios"
            className="ring-2 text-sm px-4 py-2 rounded-full hover:bg-green-800 hover:ring-green-800 hover:text-white transition duration-300 "
          >
            Servicios
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
