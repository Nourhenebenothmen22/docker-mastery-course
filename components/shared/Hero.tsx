import DockerLogo from '@/components/DockerLogo';
import DockerHeroBackground from '@/components/DockerHeroBackground';
import GradientButton from '@/components/GradientButton';
import StatsCard from '@/components/StatsCard';
import { heroStats } from '@/data/heroStats';
import { ArrowRightIcon, CodeIcon } from '@/data/icons';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-dark-900">
      <DockerHeroBackground />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,166,247,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(59,166,247,0.06)_0%,transparent_50%)]" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-docker-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 -right-40 w-[350px] h-[350px] bg-blue-600/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-docker-500/4 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-4 lg:pt-8 pb-12 lg:pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white mb-4 leading-[1.15] tracking-tight text-balance">
              Master Docker{' '}
              <span className="gradient-text">From Zero to Production</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300/90 max-w-xl mb-8 leading-relaxed text-balance">
              Learn Docker from fundamentals to real-world production with commands, labs, roadmap, and professional DevOps practices.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-10">
              <GradientButton href="/roadmap" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />}>
                Start Roadmap
              </GradientButton>
              <GradientButton href="/commands" variant="secondary" icon={<CodeIcon className="w-5 h-5" />}>
                View Commands
              </GradientButton>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md lg:max-w-sm">
              {heroStats.map((stat) => (
                <StatsCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="glass-blue p-6 md:p-8 lg:p-10 rounded-full aspect-square shadow-2xl shadow-docker-500/10 hover:shadow-docker-500/25 transition-all duration-500 animate-float">
              <div className="relative">
                <div className="absolute -inset-3 bg-docker-500/5 rounded-full blur-3xl" />
                <div className="absolute -inset-6 bg-docker-400/3 rounded-full blur-2xl" />
                <DockerLogo size={140} priority showGlow />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
