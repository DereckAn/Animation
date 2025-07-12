"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Teléfono",
    primary: "+52 33 1234 5678",
    secondary: "Emergencias 24/7",
    action: "tel:+523312345678",
    description: "Llámanos para agendar citas o consultas de emergencia"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@onko.es",
    secondary: "contacto@onko.es",
    action: "mailto:info@onko.es",
    description: "Envíanos un correo con tus preguntas o solicitudes"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+52 33 1234 5678",
    secondary: "Respuesta rápida",
    action: "https://wa.me/523312345678",
    description: "Chatea con nosotros para consultas rápidas"
  },
  {
    icon: MapPin,
    title: "Ubicación Principal",
    primary: "Av. López Mateos Norte 755",
    secondary: "Jardines del Bosque, Guadalajara",
    action: "/ubicaciones",
    description: "Visítanos en nuestra clínica principal"
  }
];


export default function ContactoPage() {
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
            >
              Contacto
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros 
              canales de comunicación y nuestro equipo te responderá lo antes posible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {method.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3">
                        {method.description}
                      </p>
                      
                      <div className="space-y-1 mb-4">
                        <p className="text-blue-600 font-medium">
                          {method.primary}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {method.secondary}
                        </p>
                      </div>
                      
                      <a
                        href={method.action}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        Contactar
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6"
            >
              Envíanos un Mensaje
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-center mb-8"
            >
              Completa el formulario y nos pondremos en contacto contigo en las próximas 24 horas.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo de Consulta
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Selecciona un motivo</option>
                  <option value="primera-consulta">Primera consulta</option>
                  <option value="segunda-opinion">Segunda opinión</option>
                  <option value="seguimiento">Seguimiento</option>
                  <option value="informacion">Información general</option>
                  <option value="emergencia">Emergencia</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe tu consulta o necesidad..."
                />
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la política de privacidad y el tratamiento de mis datos personales
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-4 bg-gray-50">
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
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-8"
            >
              Horarios de Atención
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Horario General
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 8:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Emergencias
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>24 horas / 7 días</p>
                  <p>Línea directa disponible</p>
                  <p>Atención inmediata</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Citas
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Agendar con anticipación</p>
                  <p>Confirmación por WhatsApp</p>
                  <p>Recordatorios automáticos</p>
                </div>
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Necesitas Atención Inmediata?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-blue-100 mb-8 text-lg"
            >
              Si tienes una emergencia oncológica o necesitas atención inmediata, 
              no dudes en contactarnos.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="tel:+523312345678"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
              
              <a
                href="https://wa.me/523312345678"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}