'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import type { BenefitItem } from '@/types';

interface WhyDockerCarouselProps {
  benefits: BenefitItem[];
}

function getVisibleCount(): number {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

export default function WhyDockerCarousel({ benefits }: WhyDockerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = Math.max(0, benefits.length - visibleCount);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount((prev) => {
        if (prev !== newCount && currentIndex + newCount > benefits.length) {
          setCurrentIndex(Math.max(0, benefits.length - newCount));
        }
        return newCount;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [benefits.length, currentIndex]);

  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxIndex, isPaused]);

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

  const slidePercent = (100 / visibleCount) * currentIndex;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className={cn(
            'flex transition-transform duration-500 ease-in-out',
            visibleCount === 1 ? 'gap-0' : 'gap-4'
          )}
          style={{ transform: `translateX(-${slidePercent}%)` }}
        >
          {benefits.map((item, i) => (
            <div
              key={i}
              className={cn(
                'shrink-0',
                visibleCount === 1 && 'w-full',
                visibleCount === 2 && 'w-[calc(50%-8px)]',
                visibleCount === 3 && 'w-[calc(33.333%-11px)]'
              )}
            >
              <div className="glass-card p-6 h-full flex flex-col">
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
          'absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-700 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-docker-500/20 transition-all duration-200 z-10',
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
          'absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-700 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-docker-500/20 transition-all duration-200 z-10',
          currentIndex >= maxIndex && 'opacity-30 cursor-not-allowed'
        )}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Carousel indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              i === currentIndex ? 'bg-docker-500 w-8' : 'bg-dark-600 hover:bg-dark-500'
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
