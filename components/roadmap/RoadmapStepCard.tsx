import type { RoadmapStep } from '@/types';
import { cn } from '@/lib/utils';

interface RoadmapStepCardProps {
  step: RoadmapStep;
  index: number;
}

export default function RoadmapStepCard({ step, index }: RoadmapStepCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row items-start gap-6 md:gap-12',
        !isEven && 'md:flex-row-reverse'
      )}
    >
      <div className={cn('flex-1', isEven && 'md:text-right')}>
        <div className="glass-card p-6 relative group">
          <div className={cn(
            'absolute -top-3 w-8 h-8 rounded-full bg-gradient-to-br from-docker-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-docker-500/30 z-10',
            isEven ? 'right-4' : 'left-4'
          )}>
            {step.id}
          </div>
          <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>

          {step.practice && (
            <div className="mb-3 p-3 bg-docker-500/5 border border-docker-500/10 rounded-lg">
              <span className="text-xs font-semibold text-docker-400 uppercase tracking-wider block mb-1">Practice</span>
              <p className="text-gray-300 text-sm">{step.practice}</p>
            </div>
          )}

          {step.commands.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Commands</span>
              <div className="space-y-1">
                {step.commands.map((cmd, i) => (
                  <code
                    key={i}
                    className="block text-xs text-docker-300 bg-dark-800 px-3 py-1.5 rounded border border-dark-600 font-mono"
                  >
                    {cmd}
                  </code>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex md:w-8 md:shrink-0 md:justify-center">
        <div className="w-4 h-4 rounded-full bg-docker-500 border-4 border-dark-900 shadow-lg shadow-docker-500/50" />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}
