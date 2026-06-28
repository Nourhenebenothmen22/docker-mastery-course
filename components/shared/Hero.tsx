import Link from 'next/link';
import DockerLogo from '@/components/DockerLogo';
import { ArrowRightIcon, CodeIcon } from '@/data/icons';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-docker-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-docker-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-10">
            <div className="glass-card p-6 md:p-8 rounded-2xl border-docker-500/20 shadow-xl shadow-docker-500/5">
              <DockerLogo size={160} priority showGlow />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance">
            Master Docker{' '}
            <span className="gradient-text">From Zero to Deployment</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
            Learn Docker from fundamentals to real-world deployment with commands, labs, roadmap, and professional DevOps practices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/roadmap" className="btn-primary text-lg px-8 py-4">
              <ArrowRightIcon className="w-5 h-5" />
              Start Roadmap
            </Link>
            <Link href="/commands" className="btn-secondary text-lg px-8 py-4">
              <CodeIcon className="w-5 h-5" />
              View Commands
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
