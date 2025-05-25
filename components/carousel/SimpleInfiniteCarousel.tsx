import React, { useState, useEffect, useRef } from 'react';

interface SimpleCard {
  id: string;
  content: React.ReactNode;
}

interface SimpleInfiniteCarouselProps {
  cards: SimpleCard[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const SimpleInfiniteCarousel: React.FC<SimpleInfiniteCarouselProps> = ({
  cards,
  autoPlay = true,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create infinite loop by cloning first and last cards
  const extendedCards = [
    cards[cards.length - 1],
    ...cards,
    cards[0],
  ];

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(prev => {
        if (prev === extendedCards.length - 1) {
          return 1;
        }
        return prev;
      });
    }, 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(prev => {
        if (prev === 0) {
          return cards.length;
        }
        return prev;
      });
    }, 500);
  };

  // Auto play effect
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex]);

  // Handle seamless transition
  useEffect(() => {
    if (!isTransitioning && containerRef.current) {
      if (currentIndex === 0) {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(cards.length);
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'transform 500ms ease-in-out';
          }
        });
      } else if (currentIndex === extendedCards.length - 1) {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(1);
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'transform 500ms ease-in-out';
          }
        });
      }
    }
  }, [currentIndex, isTransitioning, cards.length, extendedCards.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedCards.map((card, index) => (
          <div key={`${card.id}-${index}`} className="w-full flex-shrink-0">
            {card.content}
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        disabled={isTransitioning}
      >
        ←
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        disabled={isTransitioning}
      >
        →
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              (currentIndex - 1 + cards.length) % cards.length === index
                ? 'bg-white'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleInfiniteCarousel;