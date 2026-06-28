import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-docker-500/10 border border-docker-500/20 text-docker-300 text-xs sm:text-sm font-medium mb-6">
      {children}
    </div>
  );
}
