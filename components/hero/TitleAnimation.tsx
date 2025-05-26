import { TextCarousel } from "@/components/hero/TextCarousel";

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
          Health insurance that{" "}
          <span
            className="transition-colors duration-1000 delay-1000 ease-in-out "
            style={{
              animation: "colorTransition 2s ease-in-out 3.5s forwards",
            }}
          >
            doesn&apos;t
          </span>
        </h1>

        <div
          id="animation"
          className="flex flex-row justify-center items-center leading-none"
        >
          <span
            className="text-responsive"
            style={{
              fontSize: "clamp(1rem, 7vw, 15rem)",
              whiteSpace: "nowrap",
              animation: "colorTransition 2s ease-in-out 3.5s forwards",
            }}
          >
            get in
          </span>
          <span className="mx-2"> </span>
          <TextCarousel />
          <span className="mx-2"> </span>
          <span
            className="text-responsive"
            style={{
              fontSize: "clamp(1rem, 7vw, 15rem)",
              whiteSpace: "nowrap",
              animation: "colorTransition 2s ease-in-out 3.5s forwards",
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
