import Image from 'next/image';

export default function DockerHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <Image
        src="/docker-logo.png"
        alt=""
        fill
        priority
        className="object-contain opacity-5 blur-2xl scale-150 md:scale-[2]"
        sizes="100vw"
      />
    </div>
  );
}
