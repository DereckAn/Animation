import { TextCarousel } from "@/components/hero/TextCarousel";
import { ChanginColorText } from "./ChanginColorText";

const TitleAnimation = () => {
  return (
    <div className="w-full h-[55vh] relative flex justify-center items-center">
      <div className="text-center w-full">
        <h1
          className=" w-full text-center leading-none"
          style={{
            fontSize: "clamp(1rem, 7vw, 15rem)",
          }}
        >
          Health insurance that <ChanginColorText text=" doesn't" />
        </h1>

        <div
          id="animation"
          className="flex flex-row justify-center items-center leading-none"
        >
          <ChanginColorText text="get it" />
          <span className="mx-2"> </span>
          <TextCarousel />
          <span className="mx-2"> </span>
          <ChanginColorText text="the way" />
        </div>
      </div>
    </div>
  );
};

export default TitleAnimation;
