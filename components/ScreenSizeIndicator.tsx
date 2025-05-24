"use client"; // Necesario porque usa hooks de estado y efectos, y accede a 'window'

import { useEffect, useState } from "react";

const ScreenSizeIndicator = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [breakpoint, setBreakpoint] = useState("");
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize({ width, height });

      // Determinar breakpoint de Tailwind (valores estándar)
      if (width < 640) {
        setBreakpoint("xs"); // O base, Tailwind no tiene 'xs' por defecto pero es útil indicarlo
      } else if (width < 768) {
        setBreakpoint("sm");
      } else if (width < 1024) {
        setBreakpoint("md");
      } else if (width < 1280) {
        setBreakpoint("lg");
      } else if (width < 1536) {
        setBreakpoint("xl");
      } else {
        setBreakpoint("2xl");
      }

      // Determinar orientación
      setOrientation(width > height ? "Landscape" : "Portrait");
    };

    // Ejecutar al montar y cada vez que se redimensiona la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // No renderizar en producción o si aún no se ha calculado el tamaño
  if (process.env.NODE_ENV !== "development" || screenSize.width === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-2 right-2 z-50 bg-gray-800 text-white text-xs p-2 rounded shadow-lg opacity-80">
      <div>{breakpoint.toUpperCase()}</div>
      <div>
        {screenSize.width}px x {screenSize.height}px
      </div>
      <div>{orientation}</div>
    </div>
  );
};

export default ScreenSizeIndicator;
