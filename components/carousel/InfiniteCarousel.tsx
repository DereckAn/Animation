"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface CarouselCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  content?: React.ReactNode;
}

interface InfiniteCarouselProps {
  cards: CarouselCard[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  animationDuration?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
  peekAmount?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  cards,
  autoPlay = true,
  autoPlayInterval = 3000,
  animationDuration = 500,
  showControls = true,
  showIndicators = true,
  className = "",
  peekAmount = 80,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Create extended cards array with clones for infinite effect
  const extendedCards = [
    cards[cards.length - 1], // Clone last card at beginning
    ...cards,
    cards[0], // Clone first card at end
  ];

  const goToSlide = (index: number, skipAnimation = false) => {
    if (isTransitioning && !skipAnimation) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    if (!skipAnimation) {
      setTimeout(() => {
        setIsTransitioning(false);

        // Handle infinite loop logic
        if (index === 0) {
          setCurrentIndex(cards.length);
        } else if (index === extendedCards.length - 1) {
          setCurrentIndex(1);
        }
      }, animationDuration);
    } else {
      setIsTransitioning(false);
    }
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const goToSpecificSlide = (index: number) => {
    goToSlide(index + 1);
  };

  // Auto play functionality
  useEffect(() => {
    if (isPlaying && autoPlay) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPlaying, autoPlay, autoPlayInterval]);

  // Handle immediate repositioning after transition
  useEffect(() => {
    if (!isTransitioning) {
      if (currentIndex === 0) {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = "none";
            setCurrentIndex(cards.length);
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.style.transition = `transform ${animationDuration}ms ease-in-out`;
              }
            }, 50);
          }
        }, 50);
      } else if (currentIndex === extendedCards.length - 1) {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = "none";
            setCurrentIndex(1);
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.style.transition = `transform ${animationDuration}ms ease-in-out`;
              }
            }, 50);
          }
        }, 50);
      }
    }
  }, [
    isTransitioning,
    currentIndex,
    cards.length,
    extendedCards.length,
    animationDuration,
  ]);

  const getRealIndex = () => {
    if (currentIndex === 0) return cards.length - 1;
    if (currentIndex === extendedCards.length - 1) return 0;
    return currentIndex - 1;
  };

  const cardWidth = 100 - peekAmount / 4;
  const translateOffset = peekAmount / 2;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Main carousel container */}
      <div
        className="relative h-80 md:h-96"
        style={{
          paddingLeft: `${peekAmount / 2}px`,
          paddingRight: `${peekAmount / 2}px`,
        }}
      >
        <div
          ref={containerRef}
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * cardWidth}% + ${translateOffset}px))`,
            transition: isTransitioning
              ? `transform ${animationDuration}ms ease-in-out`
              : "none",
          }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(autoPlay)}
        >
          {extendedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="h-full flex-shrink-0 px-2"
              style={{ width: `${cardWidth}%` }}
            >
              <div
                className={`bg-white rounded-lg shadow-lg h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
                  index === currentIndex
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-70 hover:opacity-90"
                }`}
              >
                {card.image && (
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <h3
                    className={`font-bold text-gray-800 mb-2 ${
                      index === currentIndex ? "text-xl" : "text-lg"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-gray-600 leading-relaxed ${
                      index === currentIndex ? "text-sm" : "text-xs"
                    }`}
                  >
                    {card.description}
                  </p>
                  {card.content && index === currentIndex && (
                    <div className="mt-4">{card.content}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 disabled:opacity-50 z-10 group"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 disabled:opacity-50 z-10 group"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSpecificSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                getRealIndex() === index
                  ? "bg-blue-600 scale-110"
                  : "bg-white bg-opacity-60 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      {autoPlay && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
        >
          {isPlaying ? (
            <svg
              className="w-4 h-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default InfiniteCarousel;
