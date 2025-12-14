import { CalendarDays } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center">
      <div className="w-full h-[70vh] md:h-[85vh] relative">
        <Image
          src="/images/onkohero.webp"
          alt=""
          className="object-cover w-full h-full"
          fill
        />
        <div className="w-full h-full bg-black/30 absolute" />
      </div>

      <div className="absolute z-10 text-white max-w-250 font-inter text-end space-y-6">
        <h1 className="text-[60px] tracking-normal leading-[1.1] font-black">
          Shaking Up Traditional Contract Recruiting and HR Solutions{" "}
        </h1>
        <h2 className="tracking-wider font-light text-2xl">
          We offer an easy solution for contract recruiting and HR solutions,
          finding and managing top talent, both locally and globally.
        </h2>
        <button className="bg-green-700 text-sm ring-green-700 text-white px-4 py-1 rounded-full hover:bg-green-800 transition mr-5 inline-flex items-center gap-5 ">
          <span className="">Contáctanos</span>
          <div className="rounded-full p-2 bg-white/10">
            <CalendarDays className="size-5" />
          </div>
        </button>
        <button className="ring-2 text-sm text-white px-4 py-2 rounded-full hover:bg-green-800 hover:ring-green-800 transition duration-300">
          Conoce más
        </button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L40,101.3C80,107,160,117,240,117.3C320,117,400,107,480,117.3C560,128,640,160,720,186.7C800,213,880,235,960,229.3C1040,224,1120,192,1200,186.7C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};
