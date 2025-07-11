'use client'

import { useState } from 'react'
import { Sidebar } from '../navigation/Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="relative min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <main className="transition-all duration-300 ease-in-out">
        {children}
      </main>
    </div>
  )
}