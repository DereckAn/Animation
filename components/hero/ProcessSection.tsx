import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const ProcessSection = () => {
  const steps = [
    {
      title: "Contáctanos",
      description:
        "Comunícate con nosotros directamente por teléfono o correo electrónico. O completa el formulario de contacto indicando qué tipo de atención necesitas y qué servicios te gustaría utilizar.",
    },
    {
      title: "Consulta Especializada",
      description:
        "Uno de nuestros especialistas te contactará lo antes posible para trabajar en los detalles. Podemos atenderte por correo electrónico, teléfono o videollamada según tu preferencia.",
    },
    {
      title: "Plan de Tratamiento Personalizado",
      description:
        "Utilizamos nuestra experiencia y tecnología para evaluar tu caso. Desarrollamos un plan de tratamiento personalizado que te ayudará a obtener la mejor atención oncológica posible.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contenido Izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#444] font-sans text-[42px] font-extrabold leading-[46px]"
            >
              Comenzar es Fácil
            </motion.h2>

            <div className="w-20 h-1 bg-orange-500"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#676767] font-sans text-sm font-light tracking-[0.25px] leading-[22px]"
            >
              Nuestras soluciones son amigables y están diseñadas para hacer que
              la gestión de tu tratamiento oncológico sea fácil y accesible.
              Permítenos ayudarte a optimizar tu proceso de atención y lograr
              los mejores resultados. Contáctanos hoy para conocer más sobre
              cómo podemos apoyarte en tu camino hacia la recuperación.
            </motion.p>

            {/* Botones de CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
                href="/servicios"
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                Nuestros Servicios
              </Link>
            </motion.div>
          </motion.div>

          {/* Lista de Pasos - Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="size-8 text-orange-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#444] font-sans text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-[#676767] font-sans text-sm font-light tracking-[0.25px] leading-[22px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
