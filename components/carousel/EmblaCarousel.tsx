import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { Card, CardProps } from "../hero/Card";
import RotatingArrowIcon from "../hero/RotatingArrowIcon";

type PropType = {
  options?: EmblaOptionsType;
  cards?: CardProps[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, cards } = props;
  const emblaOptions: EmblaOptionsType = {
    duration: 60,
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [
    Autoplay({
      playOnInit: true,
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
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
          disabled={prevBtnDisabled}
          size={60}
          stroke="0.7"
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          className="group text-green-300"
        />
        <RotatingArrowIcon
          direction="right"
          disabled={nextBtnDisabled}
          size={60}
          stroke="0.7"
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          className="group text-green-300"
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
