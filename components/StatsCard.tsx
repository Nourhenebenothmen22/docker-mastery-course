import { cn } from '@/lib/utils';

interface StatsCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function StatsCard({ label, value, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-5 md:p-6 text-center group hover:border-docker-500/30 transition-all duration-300',
        className
      )}
    >
      <span className="block text-2xl md:text-3xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
        {value}
      </span>
      <span className="block text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
