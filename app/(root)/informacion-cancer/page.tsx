"use client";

import { motion } from "framer-motion";
import { BookOpen, AlertCircle, Heart, Shield, Users, Search } from "lucide-react";

const cancerTypes = [
  {
    name: "Cáncer de Mama",
    description: "Uno de los tipos más comunes en mujeres. La detección temprana es clave.",
    symptoms: ["Bulto en la mama", "Cambios en la piel", "Secreción del pezón"],
    prevention: "Autoexamen mensual, mamografías regulares después de los 40 años"
  },
  {
    name: "Cáncer de Pulmón",
    description: "Frecuentemente asociado con el tabaquismo, pero también puede afectar a no fumadores.",
    symptoms: ["Tos persistente", "Dificultad para respirar", "Dolor en el pecho"],
    prevention: "No fumar, evitar la exposición al humo, chequeos regulares"
  },
  {
    name: "Cáncer Colorrectal",
    description: "Afecta el colon o el recto. Muy tratable cuando se detecta temprano.",
    symptoms: ["Cambios en los hábitos intestinales", "Sangre en las heces", "Dolor abdominal"],
    prevention: "Colonoscopia regular después de los 50 años, dieta saludable"
  },
  {
    name: "Cáncer de Próstata",
    description: "El más común en hombres mayores. Crecimiento generalmente lento.",
    symptoms: ["Dificultad para orinar", "Flujo débil", "Sangre en la orina"],
    prevention: "Exámenes regulares después de los 50 años, dieta balanceada"
  }
];

const warningSigns = [
  "Cambios en el tamaño, forma o color de lunares",
  "Heridas que no sanan",
  "Pérdida de peso inexplicable",
  "Fatiga constante",
  "Cambios en los hábitos intestinales",
  "Tos persistente",
  "Bultos o masas inusuales",
  "Sangrado anormal"
];


export default function InformacionCancerPage() {
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
              Información sobre el Cáncer
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Conoce más sobre el cáncer, sus tipos, síntomas y medidas de prevención. 
              La información es poder cuando se trata de tu salud.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is Cancer */}
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6"
            >
              ¿Qué es el Cáncer?
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto text-center mb-8"
            >
              <p className="text-lg text-gray-600 mb-4">
                El cáncer es una enfermedad en la cual algunas células del cuerpo crecen sin control 
                y se extienden a otras partes del cuerpo. Puede comenzar en casi cualquier parte 
                del cuerpo humano.
              </p>
              <p className="text-lg text-gray-600">
                Normalmente, las células humanas crecen y se multiplican para formar nuevas células 
                según las necesita el cuerpo. Sin embargo, en el cáncer, este proceso se descontrola.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cancer Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
            >
              Tipos Comunes de Cáncer
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cancerTypes.map((cancer, index) => (
                <motion.div
                  key={cancer.name}
                  initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {cancer.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {cancer.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Síntomas Comunes:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {cancer.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Prevención:
                      </h4>
                      <p className="text-sm text-gray-600">
                        {cancer.prevention}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6"
            >
              Señales de Alerta
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-center max-w-3xl mx-auto mb-8"
            >
              Es importante conocer las señales de alerta del cáncer. Si experimentas 
              alguno de estos síntomas de forma persistente, consulta a un médico.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-red-50 border border-red-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-semibold text-red-900">
                  Síntomas que No Debes Ignorar
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
            >
              Prevención del Cáncer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Aunque no todos los cánceres se pueden prevenir, adoptar un estilo de vida 
              saludable puede reducir significativamente el riesgo.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Estilo de Vida Saludable
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• No fumar</li>
                  <li>• Mantener peso saludable</li>
                  <li>• Ejercicio regular</li>
                  <li>• Dieta balanceada</li>
                  <li>• Limitar alcohol</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Protección
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Protector solar</li>
                  <li>• Vacunas preventivas</li>
                  <li>• Evitar exposición a carcinógenos</li>
                  <li>• Sexo seguro</li>
                  <li>• Evitar infecciones</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Detección Temprana
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Chequeos médicos regulares</li>
                  <li>• Autoexámenes</li>
                  <li>• Pruebas de detección</li>
                  <li>• Seguimiento médico</li>
                  <li>• Atención a síntomas</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Tienes Dudas sobre el Cáncer?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-100 mb-8 text-lg"
            >
              Nuestro equipo de especialistas está disponible para responder tus preguntas 
              y brindarte la información que necesitas.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="/contacto"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Consultar Especialista
              </a>
              
              <a
                href="/citas"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Agendar Cita
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}