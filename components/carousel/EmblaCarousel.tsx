import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Card, CardProps } from "../hero/Card";
import RotatingArrowIcon from "../hero/RotatingArrowIcon";

type PropType = {
  options?: EmblaOptionsType;
  cards?: CardProps[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, cards } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  // Detectar slide activo usando emblaApi
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {cards?.map((cardProps, index) => (
            <div className="embla__slide" key={index}>
              {/* WRAPPER INTERNO - Aquí aplicamos el scale */}
              <div
                className={`embla__slide__inner ${
                  index === activeIndex ? "embla__slide__inner--active" : ""
                }`}
              >
                <Card {...cardProps} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <RotatingArrowIcon
          direction="left"
          size={50}
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          className="text-green-500 group-hover:text-green-200 transition-all
        duration-700 ease-in-out
        group-hover:-translate-x-60 transform"
        />
        <RotatingArrowIcon
          direction="right"
          size={50}
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          //   className="text-green-500 group-hover:text-green-200 transition-all
          // duration-700 ease-in-out
          // group-hover:-translate-x-60 transform"
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
