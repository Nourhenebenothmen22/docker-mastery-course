'use client';

import { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { BenefitItem } from '@/types';

interface WhyDockerCarouselProps {
  benefits: BenefitItem[];
}

export default function WhyDockerCarousel({ benefits }: WhyDockerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const visibleCount = 1;
  const maxIndex = Math.max(0, benefits.length - visibleCount);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setIsTransitioning(true);
      setCurrentIndex(clamped);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [isTransitioning, maxIndex]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {benefits.map((item, i) => (
            <div key={i} className="w-full shrink-0 px-2">
              <div className="glass-card p-6 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-docker-500/20 flex items-center justify-center mb-5 shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-docker-400 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-dark-700 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-docker-500/20 transition-all duration-200',
          currentIndex === 0 && 'opacity-30 cursor-not-allowed'
        )}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goNext}
        disabled={currentIndex >= maxIndex}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-dark-700 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-docker-500/20 transition-all duration-200',
          currentIndex >= maxIndex && 'opacity-30 cursor-not-allowed'
        )}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Carousel indicators">
        {benefits.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              i === currentIndex
                ? 'bg-docker-500 w-8'
                : 'bg-dark-600 hover:bg-dark-500'
            )}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
