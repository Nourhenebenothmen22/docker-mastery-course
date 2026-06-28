import Image from 'next/image';

export default function DockerHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 -right-40 w-80 h-80 opacity-[0.03]">
        <Image
          src="/docker-logo.png"
          alt=""
          width={320}
          height={320}
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 opacity-[0.02] rotate-180">
        <Image
          src="/docker-logo.png"
          alt=""
          width={384}
          height={384}
          className="object-contain"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
