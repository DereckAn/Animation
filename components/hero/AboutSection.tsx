import { motion } from "framer-motion";

type Props = {};
export const AboutSection = ({}: Props) => {
  return (
    <section className="py-16 px-4 bg-linear-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Comprometidos con tu Salud
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-blue-100 max-w-3xl mx-auto mb-8 text-lg"
          >
            En Onko.es, entendemos que cada paciente es único. Nuestro equipo
            multidisciplinario trabaja en conjunto para desarrollar planes de
            tratamiento personalizados que consideren no solo la condición
            médica, sino también las necesidades emocionales y sociales de cada
            persona.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">1000+</div>
              <div className="text-blue-100">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
              <div className="text-blue-100">Ubicaciones</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
