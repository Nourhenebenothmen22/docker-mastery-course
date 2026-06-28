import Link from 'next/link';
import DockerLogo from '@/components/DockerLogo';
import Badge from '@/components/Badge';
import StatsCard from '@/components/StatsCard';
import { heroStats } from '@/data/heroStats';
import { ArrowRightIcon, CodeIcon } from '@/data/icons';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,166,247,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,166,247,0.05)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-docker-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-docker-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Badge>
              Docker Course &bull; Roadmap &bull; Labs &bull; Deployment
            </Badge>
          </div>

          <div className="flex justify-center mb-10">
            <div className="glass-card p-6 md:p-10 rounded-2xl border-docker-500/20 shadow-2xl shadow-docker-500/10 hover:shadow-docker-500/20 transition-shadow duration-500">
              <DockerLogo size={180} priority showGlow />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance">
            Master Docker{' '}
            <span className="gradient-text">From Zero to Deployment</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
            Learn Docker from fundamentals to real-world deployment with commands, labs, roadmap, and professional DevOps practices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/roadmap" className="btn-primary text-lg px-8 py-4 shadow-lg shadow-docker-500/20 hover:shadow-docker-500/40 transition-all duration-300">
              <ArrowRightIcon className="w-5 h-5" />
              Start Roadmap
            </Link>
            <Link href="/commands" className="btn-secondary text-lg px-8 py-4 border-docker-500/30 hover:bg-docker-500/10 transition-all duration-300">
              <CodeIcon className="w-5 h-5" />
              View Commands
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <StatsCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
