"use client";

import CustomButton from "@/components/hero/CustomButton";
import TitleAnimation from "@/components/hero/TitleAnimation";
// import { Card } from "@/components/hero/Card";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import "@/styles/embla.css";
import { EmblaOptionsType } from "embla-carousel";
import { CardProps } from "@/components/hero/Card";
import EmblaCarouselWithFramer from "@/components/carousel/EmblaCarouselWithFramer";

const OPTIONS: EmblaOptionsType = { loop: true };
const cardSample: CardProps[] = [
  {
    name: "SARAH FOXX",
    title: "OWNER, CEO",
    id: "15-26669-890",
    job: "Sunnyside Up Day Care",
  },
  {
    name: "JEFFREY R. BOTT",
    title: "LEADING PARTNER",
    id: "86-97432-123",
    job: "Bott and Sons Accounting",
  },
  {
    name: "JULIANNA ALVAREZ",
    title: "FOUNDER",
    id: "72-36924-486",
    job: "Spaw Retreat Dog Grooming",
  },
  {
    name: "OSCAR WILDER",
    title: "CEO, ENGINEER",
    id: "64-16497-726",
    job: "Endurance.Al",
  },
];

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center p-5 ">
      <TitleAnimation />
      <div className="w-full h-[45vh] flex md:flex-row flex-col relative">
        <div className="flex basis-1/2 border-2 border-green-100 flex-col p-5 justify-between shrink-0">
          <p className="text-3xl max-w-2xl ">
            Join hundreds of businesses who trust us to offer health insurance
            that works the way it should: affordable coverage that puts
            employees and their doctors in the driving seat.
          </p>
          <CustomButton />
        </div>
        <div className="flex basis-1/2 border-2 border-l-0 border-green-100 w-1/2">
          {/* <EmblaCarousel options={OPTIONS} cards={cardSample} /> */}
          <EmblaCarouselWithFramer options={OPTIONS} cards={cardSample} />
        </div>
      </div>
    </section>
  );
}
