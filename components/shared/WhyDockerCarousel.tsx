'use client';

import { useState, useCallback } from 'react';
import type { BenefitItem } from '@/types';
import { ArrowLeftIcon, ArrowRightIcon } from '@/data/icons';
import { cn } from '@/lib/utils';

interface WhyDockerCarouselProps {
  benefits: BenefitItem[];
}

export default function WhyDockerCarousel({ benefits }: WhyDockerCarouselProps) {
  const [current, setCurrent] = useState(0);
  const max = Math.max(0, benefits.length - 1);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= max ? 0 : prev + 1));
  }, [max]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? max : prev - 1));
  }, [max]);

  const getVisibleBenefits = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (current + i) % benefits.length;
      items.push(benefits[idx]);
    }
    return items;
  };

  if (benefits.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {getVisibleBenefits().map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="glass-card p-6 min-h-[200px] animate-fade-in"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          {benefits.slice(current, current + 2).map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="glass-card p-6 min-h-[200px] animate-fade-in"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
          {current + 2 > benefits.length && (
            <div
              key={`${benefits[0].title}-wrap`}
              className="glass-card p-6 min-h-[200px] animate-fade-in"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{benefits[0].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefits[0].description}</p>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <div className="glass-card p-6 min-h-[200px] animate-fade-in">
            <h3 className="text-lg font-semibold text-white mb-3">{benefits[current].title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{benefits[current].description}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={prev}
          className="flex items-center justify-center w-10 h-10 rounded-full glass-blue text-gray-400 hover:text-white hover:border-docker-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-docker-500/50"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
          {benefits.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-docker-500/50',
                i === current
                  ? 'bg-docker-500 w-6'
                  : 'bg-dark-600 hover:bg-dark-500'
              )}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex items-center justify-center w-10 h-10 rounded-full glass-blue text-gray-400 hover:text-white hover:border-docker-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-docker-500/50"
          aria-label="Next slide"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
