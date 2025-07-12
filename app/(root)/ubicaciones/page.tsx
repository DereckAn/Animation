"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Car, Bus, Navigation } from "lucide-react";

const locations = [
  {
    name: "Hospital San Vicente",
    address: "Calle Miguel Hidalgo y Costilla Número 219, Colonia Centro",
    city: "Ciudad Guzmán, Jalisco, CP: 49000",
    phone: "+52 33 1234 5678",
    hours: [
      { day: "Lunes - Viernes", time: "8:00 AM - 6:00 PM" },
      { day: "Sábados", time: "8:00 AM - 2:00 PM" },
      { day: "Domingos", time: "Cerrado" }
    ],
    services: [
      "Consulta externa",
      "Quimioterapia",
      "Estudios de imagen",
      "Laboratorio"
    ],
    parking: "Estacionamiento gratuito disponible",
    transport: "Acceso por transporte público"
  },
  {
    name: "Onkimia",
    address: "Calle Beethoven 287, Juan Manuel",
    city: "Guadalajara, Jalisco, CP: 44680",
    phone: "+52 33 1234 5679",
    hours: [
      { day: "Lunes - Viernes", time: "9:00 AM - 5:00 PM" },
      { day: "Sábados", time: "9:00 AM - 1:00 PM" },
      { day: "Domingos", time: "Cerrado" }
    ],
    services: [
      "Consulta externa",
      "Quimioterapia especializada",
      "Seguimiento oncológico",
      "Segunda opinión"
    ],
    parking: "Estacionamiento disponible",
    transport: "Múltiples rutas de autobús disponibles"
  },
  {
    name: "Clínica Córdoba",
    address: "Calle Ignacio Zaragoza 377, Colonia Centro",
    city: "Colima, Colima, CP: 28000",
    phone: "+52 33 1234 5680",
    hours: [
      { day: "Lunes - Viernes", time: "8:30 AM - 5:30 PM" },
      { day: "Sábados", time: "8:30 AM - 1:30 PM" },
      { day: "Domingos", time: "Cerrado" }
    ],
    services: [
      "Consulta externa",
      "Atención oncológica",
      "Cuidados paliativos",
      "Apoyo psicológico"
    ],
    parking: "Estacionamiento gratuito",
    transport: "Centro de la ciudad"
  },
  {
    name: "Clínica Progreso",
    address: "Calle Progreso 271, Colonia Americana",
    city: "Guadalajara, Jalisco",
    phone: "+52 33 1234 5681",
    hours: [
      { day: "Lunes - Viernes", time: "8:00 AM - 6:00 PM" },
      { day: "Sábados", time: "8:00 AM - 2:00 PM" },
      { day: "Domingos", time: "Cerrado" }
    ],
    services: [
      "Consulta externa",
      "Tratamientos oncológicos",
      "Seguimiento médico",
      "Atención integral"
    ],
    parking: "Estacionamiento disponible",
    transport: "Zona céntrica con fácil acceso"
  },
  {
    name: "Hospital San Javier",
    address: "Pablo Casals 640, Sótano 4",
    city: "Guadalajara, Jalisco",
    phone: "+52 33 1234 5682",
    hours: [
      { day: "Lunes - Viernes", time: "7:00 AM - 7:00 PM" },
      { day: "Sábados", time: "8:00 AM - 2:00 PM" },
      { day: "Domingos", time: "Emergencias" }
    ],
    services: [
      "Consulta externa",
      "Cirugía oncológica",
      "Hospitalización",
      "Cuidados intensivos"
    ],
    parking: "Estacionamiento del hospital",
    transport: "Rutas de transporte público"
  },
  {
    name: "Clínica de Radioterapia de Occidente",
    address: "Avenida Patria 2073, Colonia Providencia",
    city: "Guadalajara, Jalisco",
    phone: "+52 33 1234 5683",
    hours: [
      { day: "Lunes - Viernes", time: "8:00 AM - 6:00 PM" },
      { day: "Sábados", time: "8:00 AM - 1:00 PM" },
      { day: "Domingos", time: "Cerrado" }
    ],
    services: [
      "Radioterapia",
      "Radio-oncología",
      "Tratamientos especializados",
      "Seguimiento médico"
    ],
    parking: "Estacionamiento gratuito",
    transport: "Av. Patria - múltiples rutas"
  },
  {
    name: "Asís Núcleo Médico",
    address: "Calle Simón Bolívar 71",
    city: "Tala, Jalisco",
    phone: "+52 33 1234 5684",
    hours: [
      { day: "Lunes - Viernes", time: "8:00 AM - 5:00 PM" },
      { day: "Sábados", time: "8:00 AM - 1:00 PM" },
      { day: "Domingos", time: "Cerrado" }
    ],
    services: [
      "Consulta externa",
      "Atención oncológica",
      "Medicina general",
      "Especialidades médicas"
    ],
    parking: "Estacionamiento disponible",
    transport: "Transporte local disponible"
  },
  {
    name: "Hospital París",
    address: "Calle Zaragoza 138",
    city: "Etzatlán, Jalisco",
    phone: "+52 33 1234 5685",
    hours: [
      { day: "Lunes - Viernes", time: "8:00 AM - 6:00 PM" },
      { day: "Sábados", time: "8:00 AM - 2:00 PM" },
      { day: "Domingos", time: "Emergencias" }
    ],
    services: [
      "Consulta externa",
      "Atención hospitalaria",
      "Oncología",
      "Medicina interna"
    ],
    parking: "Estacionamiento del hospital",
    transport: "Transporte público local"
  }
];


export default function UbicacionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
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
              Nuestras Ubicaciones
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Contamos con múltiples ubicaciones estratégicamente distribuidas en Jalisco 
              y Colima para brindarte fácil acceso a nuestros servicios especializados.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Location Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                      {location.name}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 font-medium">
                            {location.address}
                          </p>
                          <p className="text-gray-600">
                            {location.city}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hours and Services */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Horarios de Atención
                    </h4>
                    
                    <div className="space-y-2 mb-6">
                      {location.hours.map((hour, hourIndex) => (
                        <div key={hourIndex} className="flex justify-between text-sm">
                          <span className="text-gray-700">{hour.day}</span>
                          <span className="text-gray-600">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Servicios Disponibles
                    </h4>
                    
                    <ul className="space-y-2">
                      {location.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Transport and Parking */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      Estacionamiento
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {location.parking}
                    </p>
                    
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Bus className="w-4 h-4" />
                      Transporte Público
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {location.transport}
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center gap-2">
                        <Navigation className="w-4 h-4" />
                        Cómo llegar
                      </button>
                      
                      <a
                        href={`tel:${location.phone}`}
                        className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm flex items-center gap-2 justify-center"
                      >
                        <Phone className="w-4 h-4" />
                        Llamar
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage Area */}
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
              Área de Cobertura
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Brindamos servicios oncológicos especializados en múltiples ciudades 
              de Jalisco y Colima, incluyendo:
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-4 gap-4 mt-8"
            >
              {[
                "Guadalajara",
                "Ciudad Guzmán", 
                "Colima",
                "Tala",
                "Etzatlán",
                "Zona Metropolitana",
                "Occidente de México",
                "Región Sur"
              ].map((city, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-blue-900 font-medium">{city}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
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
              Contacto de Emergencia
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-100 mb-8 text-lg"
            >
              Si tienes una emergencia oncológica, contáctanos inmediatamente. 
              Nuestro equipo está disponible 24/7 para situaciones críticas.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="tel:+523312345678"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Emergencias: +52 33 1234 5678
              </a>
              
              <a
                href="/contacto"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Contacto General
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}