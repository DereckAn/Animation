import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

type Props = {};
export const AboutSection = ({}: Props) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen con forma redondeada - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[80px] overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-50">
              {/* Placeholder - puedes reemplazar con tu imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-gray-600 text-lg font-medium">
                    Cuidado Oncológico
                    <br />
                    Especializado
                  </p>
                </div>
              </div>
              {/* Descomenta esto cuando tengas tu imagen:
              <Image
                src="/images/about-doctor.jpg"
                alt="Equipo Onko.es"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              */}
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
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
            >
              Comprometidos con tu Salud y Bienestar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-600 text-lg leading-relaxed"
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
              className="text-gray-600 text-lg leading-relaxed"
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
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              >
                <span className="font-semibold">Consulta Gratuita</span>
                <div className="rounded-full p-2 bg-white/20 group-hover:bg-white/30 transition-colors">
                  <CalendarDays className="size-5" />
                </div>
              </Link>
              <Link
                href="/equipo"
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
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
