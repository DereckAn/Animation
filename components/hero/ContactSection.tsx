import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          >
            ¿Necesitas una Consulta?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-600 mb-8 text-lg"
          >
            Nuestro equipo está listo para brindarte la atención que necesitas.
            Contáctanos para agendar tu cita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="tel:+523312345678"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +52 33 1234 5678
            </Link>
            <Link
              href="/ubicaciones"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Ver Ubicaciones
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
