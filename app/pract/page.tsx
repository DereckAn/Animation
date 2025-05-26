import CarouselExample from "@/components/carousel/CarouselExample";
import React from "react";

const ResponsiveHealthText = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-none">
        {/* Versión para laptops/desktop (landscape) */}
        <h1
          className="hidden lg:block w-full text-center leading-none"
          style={{
            fontSize: "clamp(1rem, 7vw, 15rem)",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            letterSpacing: "normal",
            whiteSpace: "nowrap",
          }}
        >
          Health insurance that doesn`&apos;` t
        </h1>

        {/* Versión para tablet (iPad) */}
        <h1
          className="hidden md:block lg:hidden w-full text-center text-4xl md:text-6xl font-bold leading-tight"
          style={{
            fontFamily: "Arial, sans-serif",
            letterSpacing: "normal",
          }}
        >
          Health insurance that doesn`&apos;`t
        </h1>

        {/* Versión para móvil */}
        <h1
          className="block md:hidden w-full text-center text-2xl sm:text-3xl font-bold leading-tight"
          style={{
            fontFamily: "Arial, sans-serif",
            letterSpacing: "normal",
          }}
        >
          Health insurance that does`&apos;`t
        </h1>

        {/* Información de debug (puedes quitar esto) */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Ajusta el tamaño de tu ventana para ver cómo se adapta el texto</p>
          <p className="mt-2">
            <span className="lg:inline hidden">
              Pantalla: Desktop/Laptop (lg+)
            </span>
            <span className="md:inline lg:hidden hidden">
              Pantalla: Tablet (md)
            </span>
            <span className="md:hidden inline">Pantalla: Móvil (sm)</span>
          </p>
        </div>
      </div>
      {/* <CarouselExample /> */}
    </div>
  );
};

export default ResponsiveHealthText;
