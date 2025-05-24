"use client";


import CustomButton from "@/components/hero/CustomButton";
import TitleAnimation from "@/components/hero/TitleAnimation";

export default function Home() {
  const handleQuoteClick = () => {
    console.log("Solicitando cotización personalizada...");
    // Aquí iría tu lógica
  };
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center border-2 border-red-500 p-5 ">
      <TitleAnimation />
      <div className="w-full h-[45vh] relative border-2 border-amber-400">
        <div>
          <CustomButton/>
        </div>
        <div></div>
      </div>
    </section>
  );
}
