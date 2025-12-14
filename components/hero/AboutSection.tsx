import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
export const AboutSection = ({}: Props) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto md:px-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen con forma redondeada - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-80 md:h-100 w-full rounded-tl-md rounded-tr-[110px] rounded-bl-[110px] rounded-br-md overflow-hidden shadow-2xl">
              {/* Placeholder - puedes reemplazar con tu imagen */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-gray-600 text-lg font-medium">
                    Cuidado Oncológico
                    <br />
                    Especializado
                  </p>
                </div>
              </div>
              <Image
                src="/images/onkohero.webp"
                alt="Equipo Onko.es"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Contenido - Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#444] font-sans text-4xl font-medium leading-10.5"
            >
              Comprometidos con tu Salud y Bienestar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[#676767] font-sans text-sm font-light tracking-[0.25px] leading-5.5"
            >
              Onko.es es un centro oncológico especializado e innovador dedicado
              al cuidado integral de pacientes con cáncer. Nuestro equipo
              multidisciplinario de profesionales altamente capacitados trabaja
              en conjunto para desarrollar planes de tratamiento personalizados.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-[#676767] font-sans text-sm font-light tracking-[0.25px] leading-5.5"
            >
              Con más de 20 años de experiencia, nos esforzamos constantemente
              por mejorar nuestros procesos y metodologías. Contamos con
              tecnología de vanguardia y sistemas especializados para
              proporcionar la mejor atención a nuestros pacientes. Todos
              nuestros especialistas están comprometidos con horarios flexibles
              para garantizar la accesibilidad cuando más nos necesites.
            </motion.p>

            {/* Botones de CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <Link
                href="/contacto"
                className="bg-green-700 text-sm ring-green-700 text-white px-4 py-1 rounded-full hover:bg-green-800 transition  inline-flex items-center gap-5 "
              >
                <span className="font-semibold">Consulta Gratuita</span>
                <div className="rounded-full p-2 bg-white/20 group-hover:bg-white/30 transition-colors">
                  <CalendarDays className="size-5" />
                </div>
              </Link>
              <Link
                href="/equipo"
                className="ring-2 text-sm hover:text-white px-4 py-2 rounded-full hover:bg-green-800 hover:ring-green-800 transition duration-300"
              >
                Conocer Más
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
