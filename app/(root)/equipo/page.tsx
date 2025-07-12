"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Juan Carlos Méndez",
    title: "Oncólogo Médico",
    specialty: "Especialista en Oncología Médica",
    experience: "15 años de experiencia",
    education: [
      "Medicina - Universidad de Guadalajara",
      "Especialidad en Oncología Médica - IMSS",
      "Fellowship en Oncología - Hospital ABC",
    ],
    certifications: [
      "Certificación del Consejo Mexicano de Oncología",
      "Miembro de la Sociedad Mexicana de Oncología",
      "Certificación en Quimioterapia Avanzada",
    ],
    image: "/team/doctor-placeholder.jpg",
  },
  {
    name: "Dra. María Elena Rodríguez",
    title: "Cirujana Oncóloga",
    specialty: "Especialista en Cirugía Oncológica",
    experience: "12 años de experiencia",
    education: [
      "Medicina - Universidad Autónoma de Guadalajara",
      "Especialidad en Cirugía General - Hospital Civil",
      "Subespecialidad en Cirugía Oncológica - INEN",
    ],
    certifications: [
      "Certificación del Consejo Mexicano de Cirugía",
      "Miembro de la Sociedad Mexicana de Cirugía Oncológica",
      "Certificación en Cirugía Laparoscópica",
    ],
    image: "/team/doctor-placeholder.jpg",
  },
  {
    name: "Dr. Roberto Sánchez",
    title: "Radio-Oncólogo",
    specialty: "Especialista en Radio-Oncología",
    experience: "10 años de experiencia",
    education: [
      "Medicina - Tecnológico de Monterrey",
      "Especialidad en Radio-Oncología - Instituto Nacional de Cancerología",
      "Fellowship en Radioterapia Estereotáxica - MD Anderson",
    ],
    certifications: [
      "Certificación del Consejo Mexicano de Radio-Oncología",
      "Miembro de la Sociedad Mexicana de Radio-Oncología",
      "Certificación en Radioterapia de Intensidad Modulada",
    ],
    image: "/team/doctor-placeholder.jpg",
  },
  {
    name: "Dra. Ana Lucía Herrera",
    title: "Hematóloga-Oncóloga",
    specialty: "Especialista en Hematología y Oncología",
    experience: "8 años de experiencia",
    education: [
      "Medicina - Universidad Nacional Autónoma de México",
      "Especialidad en Medicina Interna - Hospital General",
      "Subespecialidad en Hematología - Instituto Nacional de Cancerología",
    ],
    certifications: [
      "Certificación del Consejo Mexicano de Hematología",
      "Miembro de la Sociedad Mexicana de Hematología",
      "Certificación en Trasplante de Médula Ósea",
    ],
    image: "/team/doctor-placeholder.jpg",
  },
];

export default function EquipoPage() {
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
              Nuestro Equipo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Contamos con un equipo multidisciplinario de especialistas
              altamente capacitados y comprometidos con brindar la mejor
              atención oncológica.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 md:h-32 w-24 h-24 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {member.name}
                    </h3>

                    <p className="text-blue-600 font-medium mb-1">
                      {member.title}
                    </p>

                    <p className="text-gray-600 mb-3">{member.specialty}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        {member.experience}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-sm text-blue-900">
                            Formación Académica
                          </h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.education.map((edu, eduIndex) => (
                            <li
                              key={eduIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-sm text-blue-900">
                            Certificaciones
                          </h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.certifications.map((cert, certIndex) => (
                            <li
                              key={certIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
            >
              Nuestros Valores
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8 mt-12"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Compasión
                </h3>
                <p className="text-gray-600">
                  Entendemos el impacto emocional del cáncer y brindamos apoyo
                  integral.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Excelencia
                </h3>
                <p className="text-gray-600">
                  Mantenemos los más altos estándares de calidad en todos
                  nuestros servicios.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Trabajo en Equipo
                </h3>
                <p className="text-gray-600">
                  Colaboramos estrechamente para brindar atención
                  multidisciplinaria.
                </p>
              </div>
            </motion.div>
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
              Conoce a Nuestros Especialistas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-100 mb-8 text-lg"
            >
              Agenda una cita con cualquiera de nuestros especialistas para
              recibir la atención personalizada que necesitas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="/citas"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Agendar Cita
              </a>
              <a
                href="/contacto"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Más Información
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
