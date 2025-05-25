"use client";

import CustomButton from "@/components/hero/CustomButton";
import TitleAnimation from "@/components/hero/TitleAnimation";

export default function Home() {
  const handleQuoteClick = () => {
    console.log("Solicitando cotización personalizada...");
    // Aquí iría tu lógica
  };
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center p-5 ">
      <TitleAnimation />
      <div className="w-full h-[45vh] flex relative">
        <div className="flex basis-1/2 border-2 border-green-100 flex-col p-5 justify-between">
          <p className="text-3xl max-w-2xl ">
            Join hundreds of businesses who trust us to offer health insurance
            that works the way it should: affordable coverage that puts
            employees and their doctors in the driving seat.
          </p>
          <CustomButton />
        </div>
        <div className="flex basis-1/2 justify-end"></div>
      </div>
    </section>
  );
}
