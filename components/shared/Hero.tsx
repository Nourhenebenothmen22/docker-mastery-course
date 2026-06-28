import DockerLogo from '@/components/DockerLogo';
import DockerHeroBackground from '@/components/DockerHeroBackground';
import GradientButton from '@/components/GradientButton';
import StatsCard from '@/components/StatsCard';
import { heroStats } from '@/data/heroStats';
import { ArrowRightIcon, CodeIcon } from '@/data/icons';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark-900">
      <DockerHeroBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,166,247,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(59,166,247,0.06)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-docker-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-docker-500/4 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-balance">
              Master Docker{' '}
              <span className="gradient-text">From Zero to Production</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xl mb-10 leading-relaxed text-balance">
              Learn Docker from fundamentals to real-world production with commands, labs, roadmap, and professional DevOps practices.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-14">
              <GradientButton href="/roadmap" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />}>
                Start Roadmap
              </GradientButton>
              <GradientButton href="/commands" variant="secondary" icon={<CodeIcon className="w-5 h-5" />}>
                View Commands
              </GradientButton>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg">
              {heroStats.map((stat) => (
                <StatsCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="glass-card p-8 md:p-10 lg:p-14 rounded-2xl border-docker-500/20 shadow-2xl shadow-docker-500/10 hover:shadow-docker-500/25 transition-all duration-500 animate-float">
              <div className="relative">
                <div className="absolute -inset-4 bg-docker-500/5 rounded-full blur-3xl" />
                <div className="absolute -inset-8 bg-docker-400/3 rounded-full blur-2xl" />
                <DockerLogo size={200} priority showGlow />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
