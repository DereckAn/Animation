'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X, Menu, Phone, MapPin, Calendar, Users, Stethoscope, Shield, BookOpen, Mail } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navigationItems = [
  { href: '/', label: 'Inicio', icon: Stethoscope },
  { href: '/servicios', label: 'Servicios', icon: Shield },
  { href: '/equipo', label: 'Nuestro Equipo', icon: Users },
  { href: '/ubicaciones', label: 'Ubicaciones', icon: MapPin },
  { href: '/informacion-cancer', label: 'Información del Cáncer', icon: BookOpen },
  { href: '/contacto', label: 'Contacto', icon: Mail },
  { href: '/citas', label: 'Citas', icon: Calendar },
]

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
  closed: {
    x: '-100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const overlayVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="https://www.onko-es.com.mx/assets/img/logo-oncologia-en-guadalajara-jalisco.png"
                alt="Onko.es Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold text-blue-900">Onko.es</h2>
                <p className="text-sm text-gray-600">Oncología Especializada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4">
          <motion.ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.li
                  key={item.href}
                  variants={itemVariants}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onToggle}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                    <span className="text-gray-700 group-hover:text-blue-900 font-medium">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
        </nav>

        {/* Contact Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+52 33 1234 5678</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Guadalajara, Jalisco</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}