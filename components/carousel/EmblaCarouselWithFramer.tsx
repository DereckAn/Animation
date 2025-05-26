import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
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

const EmblaCarouselWithFramer: React.FC<PropType> = (props) => {
  const { options, cards } = props;
  const emblaOptions: EmblaOptionsType = {
    duration: 40,
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  // Detectar cambios y manejar transición
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();

    if (newIndex !== activeIndex) {
      setIsTransitioning(true);

      // Cambiar índice después de un breve delay para la secuencia
      setTimeout(() => {
        setActiveIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 100);
    }
  }, [emblaApi, activeIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Variantes de animación para Framer Motion
  const cardVariants = {
    inactive: {
      scale: 0.85,
      opacity: 0.6,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1, // Pequeño delay para que se vea después del scroll
      },
    },
    transitioning: {
      scale: 0.85,
      opacity: 0.6,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const getAnimationState = (index: number) => {
    if (isTransitioning) return "transitioning";
    return index === activeIndex ? "active" : "inactive";
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {cards?.map((cardProps, index) => (
            <div className="embla__slide" key={index}>
              <motion.div
                className="embla__slide__inner"
                variants={cardVariants}
                animate={getAnimationState(index)}
                style={{ width: "100%", height: "100%" }}
              >
                <Card {...cardProps} />
              </motion.div>
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

export default EmblaCarouselWithFramer;
