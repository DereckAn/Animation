import Image from "next/image";
import cerdo from "@/assets/cerdo.webp";
import GreenBarcode from "./GreenBarcode";

export interface CardProps {
  name: string;
  title: string;
  id: string;
  job: string;
  image?: string;
  barcodeValue?: string;
}

export const Card = ({
  name,
  title,
  id,
  job,
  image,
  barcodeValue = "123",
}: CardProps) => {
  return (
    <div className="border-2 border-green-300/20 rounded-lg lg:rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-7 w-full h-full bg-green-100/35 flex flex-col justify-between">
      <div className="flex items-start justify-between text-end">
        <Image
          src={image || cerdo}
          alt={name}
          width={200}
          height={200}
          className="rounded-md sm:rounded-2xl size-[50px] sm:size-[90px] lg:size-[110px] object-cover flex-shrink-0 mb-5"
        />
        <div className="flex flex-col ml-2 min-w-0 flex-1">
          <h3 className="text-xs sm:text-lg lg:text-xl text-green-300/80 leading-tight uppercase">
            {name}
          </h3>
          <h4 className="text-xxs lg:text-lg text-green-300/50 leading-tight uppercase">
            {title}
          </h4>
          <p className="text-xxxs sm:text-sm lg:text-md text-green-300/20 mt-2 sm:mt-4 lg:mt-5 tracking-widest">
            {id}
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="text-lg sm:text-2xl lg:text-3xl flex items-center text-green-300  sm:mb-3">
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
            className="size-4 sm:size-5 lg:size-6 flex-shrink-0 mr-1"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#6e9e8f"
              strokeWidth="14.131325999999998"
            >
              <g>
                <path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z"></path>
              </g>
            </g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z"></path>
              </g>
            </g>
          </svg>
          <span className="leading-tight inline-block text-sm lg:text-lg">
            {job}
          </span>
        </h2>
        <div className="flex items-end gap-2">
          <div className="space-y-1 w-full flex-1">
            <div className="flex gap-1">
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full w-[35%]" />
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full w-[15%]" />
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full size-1.5 sm:size-2" />
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full size-1.5 sm:size-2" />
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full w-[15%]" />
            </div>
            <div className="flex gap-1">
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full w-[15%]" />
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full w-[30%]" />
              <div className="h-1.5 sm:h-2 bg-green-300/10 rounded-full w-[15%]" />
            </div>
          </div>
          <div id="barcode" className="flex-shrink-0">
            <GreenBarcode
              value={barcodeValue}
              width={45}
              height={22}
              // className="sm:w-[55px] sm:h-[26px] lg:w-[60px] lg:h-[28px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
