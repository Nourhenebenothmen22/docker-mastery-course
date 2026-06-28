import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  className?: string;
}

export default function GradientButton({
  href,
  children,
  variant = 'primary',
  icon,
  className,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-docker-500/50',
        variant === 'primary' &&
          'bg-gradient-to-r from-docker-500 to-blue-600 text-white shadow-lg shadow-docker-500/25 hover:shadow-docker-500/50 hover:from-docker-400 hover:to-blue-500 active:scale-[0.97]',
        variant === 'secondary' &&
          'border border-docker-500/30 text-docker-400 bg-dark-800/50 backdrop-blur-sm hover:bg-docker-500/10 hover:border-docker-500/50 active:scale-[0.97]',
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </Link>
  );
}
