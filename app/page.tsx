"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, MapPin, Phone, Calendar } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Oncología Médica",
    description: "Tratamiento integral y personalizado para diferentes tipos de cáncer",
    href: "/servicios/oncologia-medica"
  },
  {
    icon: Shield,
    title: "Cirugía Oncológica",
    description: "Procedimientos quirúrgicos especializados en cáncer",
    href: "/servicios/cirugia-oncologica"
  },
  {
    icon: Users,
    title: "Radio-Oncología",
    description: "Tratamientos de radioterapia avanzada y precisa",
    href: "/servicios/radio-oncologia"
  }
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Image
                src="https://www.onko-es.com.mx/assets/img/logo-oncologia-en-guadalajara-jalisco.png"
                alt="Onko.es - Oncología Especializada"
                width={150}
                height={150}
                className="mx-auto rounded-lg shadow-md"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-blue-900 mb-6"
            >
              Oncología{" "}
              <span className="text-blue-600">Especializada</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Atención médica integral y personalizada para pacientes con cáncer en Guadalajara, Jalisco. 
              Nuestro equipo de especialistas está comprometido con brindar el mejor tratamiento posible.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/citas"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agendar Cita
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contactar
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4"
            >
              Nuestros Servicios
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
            >
              Ofrecemos una amplia gama de servicios oncológicos especializados 
              con tecnología de vanguardia y un enfoque centrado en el paciente.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
                    >
                      Más información →
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
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
              En Onko.es, entendemos que cada paciente es único. Nuestro equipo multidisciplinario 
              trabaja en conjunto para desarrollar planes de tratamiento personalizados que consideren 
              no solo la condición médica, sino también las necesidades emocionales y sociales de cada persona.
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

      {/* Contact CTA */}
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
    </div>
  );
}