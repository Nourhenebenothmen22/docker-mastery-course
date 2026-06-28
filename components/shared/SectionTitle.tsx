import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={cn('mt-4 h-1 w-20 bg-gradient-to-r from-docker-500 to-blue-600 rounded-full', centered && 'mx-auto')} />
    </div>
  );
}
