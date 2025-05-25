import Image from "next/image";
import cerdo from "@/assets/cerdo.webp";
import GreenBarcode from "./GreenBarcode";

export const Card = () => {
  return (
    <div className="border-2 border-green-300 rounded-3xl p-7 w-[600px] bg-green-100/35 flex flex-col justify-between">
      <div className="flex items-start justify-between text-end">
        <Image
          src={cerdo}
          alt=""
          width={200}
          height={200}
          className="rounded-2xl size-[110px] object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-xl text-green-300/80">SARAH FOXX</h3>
          <h4 className="text-lg text-green-300/50">OWNER, CEO</h4>
          <p className="text-md text-green-300/20 mt-5 tracking-widest">
            15-26669-890
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl flex items-center text-green-300 mb-3">
          <svg
            fill="#6e9e8f30"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="90px"
            height="90px"
            viewBox="-32.23 -32.23 188.42 188.42"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
            stroke="#6e9e8f30"
            strokeWidth="0.00123959"
            className="size-6 "
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#6e9e8f"
              strokeWidth="14.131325999999998"
            >
              {" "}
              <g>
                {" "}
                <path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z"></path>{" "}
              </g>{" "}
            </g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          Sunnyside Up Day Care
        </h2>
        <div className="flex">
          <div className="space-y-1 w-full">
            <div className="flex gap-1">
              <div className="h-2 bg-green-300/10 rounded-full w-[35%]" />
              <div className="h-2 bg-green-300/10 rounded-full w-[15%]" />
              <div className="h-2 bg-green-300/10 rounded-full size-2" />
              <div className="h-2 bg-green-300/10 rounded-full size-2" />
              <div className="h-2 bg-green-300/10 rounded-full w-[15%]" />
            </div>
            <div className="flex gap-1">
              <div className="h-2 bg-green-300/10 rounded-full w-[15%]" />
              <div className="h-2 bg-green-300/10 rounded-full w-[30%]" />
              <div className="h-2 bg-green-300/10 rounded-full w-[15%]" />
            </div>
          </div>
          <div id="barcode" className="ml-auto">
            <GreenBarcode value="123" width={60} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};
