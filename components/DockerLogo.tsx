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
        <>
          <div
            className="absolute rounded-full bg-docker-500/10 blur-3xl animate-pulse"
            style={{ width: size * 2.5, height: size * 2.5 }}
          />
          <div
            className="absolute rounded-full bg-docker-400/5 blur-2xl"
            style={{ width: size * 1.5, height: size * 1.5 }}
          />
        </>
      )}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50" y="88" text-anchor="middle" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="26" font-weight="800" letter-spacing="1">docker</text>
        <g transform="translate(18, 6)">
          <rect x="8" y="28" width="22" height="12" rx="2" fill="#3ba6f7" />
          <rect x="18" y="20" width="20" height="12" rx="2" fill="#3ba6f7" />
          <rect x="28" y="12" width="22" height="12" rx="2" fill="#3ba6f7" />
          <path d="M54 40 L4 40 C2 40 0 42 0 44 L0 52 C0 62 8 68 18 68 L40 68 C50 68 58 62 58 52 L58 44 C58 42 56 40 54 40Z" fill="#3ba6f7" />
          <path d="M58 48 C64 48 69 51 71 57 C73 63 71 68 68 71 C66 73 63 73 61 71 C59 69 59 66 61 64 C63 62 64 62 64 60 C64 58 63 57 61 57 C59 57 57 56 57 54 C57 52 58 48 58 48Z" fill="#3ba6f7" />
          <circle cx="14" cy="54" r="3" fill="white" />
        </g>
      </svg>
    </div>
  );
}
