import { TextCarousel } from "@/components/hero/TextCarousel";
import { ChanginColorText } from "./ChanginColorText";

const TitleAnimation = () => {
  return (
    <div className="w-full h-[55vh] relative flex justify-center items-center shrink-0">
      <div className="text-center w-full">
        <h1
          className=" w-full text-center leading-none"
          style={{
            fontSize: "clamp(3rem, 7vw, 15rem)",
          }}
        >
          Health insurance that{" "}
          <ChanginColorText
            text=" doesn't"
            className="hidden p-0 lg:inline-block"
          />
        </h1>

        <div
          id="animation"
          className="lg:flex flex-col lg:flex-row justify-center items-center leading-none"
        >
          <p>
            <ChanginColorText
              text=" doesn't "
              className="lg:hidden inline-block"
            />
            {"     "}
            <ChanginColorText text="get it" className="inline-block" />
          </p>
          <span className="mx-2"> </span>
          <TextCarousel />
          <span className="mx-2"> </span>
          <ChanginColorText
            text="the way"
            className="leading-2 lg:leading-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleAnimation;
