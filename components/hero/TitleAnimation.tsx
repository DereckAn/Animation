import { TextCarousel } from "@/components/hero/TextCarousel";

const TitleAnimation = () => {
  return (
    <div className="w-full h-[55vh] relative flex justify-center items-center">
      <div className="text-center w-full">
        <h1
          className=" w-full text-center leading-none"
          style={{
            fontSize: "clamp(1rem, 7vw, 15rem)",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "normal",
            whiteSpace: "nowrap",
          }}
        >
          Health insurance that doesn&apos;t
        </h1>

        <div
          id="animation"
          className="flex flex-row justify-center items-center leading-none"
        >
          <span
            className="text-responsive"
            style={{
              fontSize: "clamp(1rem, 7vw, 15rem)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "normal",
              whiteSpace: "nowrap",
            }}
          >
            get in
          </span>
          <TextCarousel />
          <span
            className="text-responsive"
            style={{
              fontSize: "clamp(1rem, 7vw, 15rem)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "normal",
              whiteSpace: "nowrap",
            }}
          >
            the way
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleAnimation;
