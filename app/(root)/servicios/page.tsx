"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Shield, Users, Microscope, Activity, Stethoscope, Zap, Eye, Home } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Oncología Médica",
    description: "Diagnóstico y tratamiento integral del cáncer mediante quimioterapia, inmunoterapia y terapias dirigidas.",
    features: [
      "Quimioterapia personalizada",
      "Inmunoterapia avanzada",
      "Terapias dirigidas",
      "Seguimiento integral"
    ],
    href: "/servicios/oncologia-medica"
  },
  {
    icon: Shield,
    title: "Cirugía Oncológica",
    description: "Procedimientos quirúrgicos especializados para el tratamiento del cáncer con técnicas mínimamente invasivas.",
    features: [
      "Cirugía de mama",
      "Cirugía de tiroides",
      "Cirugía cervical",
      "Cirugía de ovario"
    ],
    href: "/servicios/cirugia-oncologica"
  },
  {
    icon: Zap,
    title: "Radio-Oncología",
    description: "Tratamientos de radioterapia de alta precisión para combatir células cancerosas.",
    features: [
      "Radioterapia externa",
      "Radioterapia conformacional",
      "Tratamientos precisos",
      "Mínimos efectos secundarios"
    ],
    href: "/servicios/radio-oncologia"
  },
  {
    icon: Microscope,
    title: "Biopsias",
    description: "Procedimientos diagnósticos especializados para obtener muestras de tejido.",
    features: [
      "Biopsias guiadas por imagen",
      "Biopsias por aspiración",
      "Análisis histopatológico",
      "Diagnóstico preciso"
    ],
    href: "/servicios/biopsias"
  },
  {
    icon: Activity,
    title: "Clínica de Linfomas",
    description: "Atención especializada para pacientes con linfomas y otros cánceres hematológicos.",
    features: [
      "Diagnóstico especializado",
      "Tratamientos avanzados",
      "Seguimiento personalizado",
      "Equipo multidisciplinario"
    ],
    href: "/servicios/linfomas"
  },
  {
    icon: Eye,
    title: "Revisión de Estudios",
    description: "Análisis y segunda opinión de estudios de imagen y patología.",
    features: [
      "Segunda opinión médica",
      "Análisis de imágenes",
      "Interpretación de estudios",
      "Consulta especializada"
    ],
    href: "/servicios/revision-estudios"
  },
  {
    icon: Home,
    title: "Atención Domiciliaria",
    description: "Cuidados oncológicos en la comodidad del hogar del paciente.",
    features: [
      "Cuidados paliativos",
      "Administración de medicamentos",
      "Seguimiento médico",
      "Apoyo familiar"
    ],
    href: "/servicios/atencion-domiciliaria"
  },
  {
    icon: Stethoscope,
    title: "Prevención del Cáncer",
    description: "Programas de detección temprana y prevención del cáncer.",
    features: [
      "Chequeos preventivos",
      "Detección temprana",
      "Educación sobre factores de riesgo",
      "Seguimiento preventivo"
    ],
    href: "/servicios/prevencion"
  }
];


export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
            >
              Nuestros Servicios
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Ofrecemos una amplia gama de servicios oncológicos especializados, 
              desde diagnóstico hasta tratamiento y seguimiento, con tecnología 
              de vanguardia y un enfoque integral centrado en el paciente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Más información →
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Necesitas más información?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-100 mb-8 text-lg"
            >
              Nuestro equipo de especialistas está disponible para responder 
              tus preguntas y ayudarte a elegir el mejor tratamiento.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contacto"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Contactar Especialista
              </Link>
              <Link
                href="/citas"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Agendar Cita
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}