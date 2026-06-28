import Image from 'next/image';
import { cn } from '@/lib/utils';

interface DockerLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
  showGlow?: boolean;
}

export default function DockerLogo({
  size = 40,
  className,
  priority = false,
  showGlow = false,
}: DockerLogoProps) {
  return (
    <div
      className={cn('relative inline-flex items-center justify-center shrink-0', className)}
      style={{ width: size, height: size }}
    >
      {showGlow && (
        <div
          className="absolute rounded-full bg-docker-500/20 blur-2xl animate-pulse"
          style={{ width: size * 1.8, height: size * 1.8 }}
        />
      )}
      <Image
        src="/docker-logo.png"
        alt="Docker logo"
        width={size}
        height={size}
        className="object-contain relative z-10"
        priority={priority}
      />
    </div>
  );
}
