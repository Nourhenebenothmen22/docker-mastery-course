import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';
import WhyDockerCarousel from '@/components/shared/WhyDockerCarousel';
import Container from '@/components/layout/Container';
import {
  BoxIcon,
  ImageIcon,
  DatabaseIcon,
  DocumentIcon,
  LayoutIcon,
  SettingsIcon,
  ArrowRightIcon,
  CodeIcon,
  CheckCircleIcon,
  CloudIcon,
} from '@/data/icons';
import type { FeatureItem, BenefitItem, CourseCardItem } from '@/types';

const learnItems: FeatureItem[] = [
  {
    icon: <BoxIcon className="w-6 h-6" />,
    title: 'Docker Fundamentals',
    description: 'Understand what Docker is, how containers work, and why they revolutionize software development.',
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: 'Images & Containers',
    description: 'Build, pull, run, and manage Docker images and containers like a pro.',
  },
  {
    icon: <DatabaseIcon className="w-6 h-6" />,
    title: 'Volumes & Networks',
    description: 'Persist data with volumes and connect containers with custom networks.',
  },
  {
    icon: <DocumentIcon className="w-6 h-6" />,
    title: 'Dockerfile',
    description: 'Write efficient Dockerfiles with multi-stage builds and best practices.',
  },
  {
    icon: <LayoutIcon className="w-6 h-6" />,
    title: 'Docker Compose',
    description: 'Orchestrate multi-container applications with simple YAML configuration.',
  },
  {
    icon: <SettingsIcon className="w-6 h-6" />,
    title: 'Real Labs & Deployment',
    description: 'Practice with real labs and deploy containers to GitHub Pages and Netlify.',
  },
];

const benefits: BenefitItem[] = [
  {
    title: 'Environment Consistency',
    description: 'Eliminate "it works on my machine" problems. Docker ensures your app runs identically everywhere.',
  },
  {
    title: 'Faster Deployment',
    description: 'Package and ship applications quickly with lightweight containers that start in seconds.',
  },
  {
    title: 'Better Collaboration',
    description: 'Share complete environments via Docker images, ensuring every team member has the same setup.',
  },
  {
    title: 'DevOps Workflow',
    description: 'Integrate Docker with CI/CD pipelines for automated builds, testing, and deployments.',
  },
  {
    title: 'Microservices-ready',
    description: 'Design and run microservices architectures with isolated containers that communicate via networks.',
  },
];

const coursePages: CourseCardItem[] = [
  {
    href: '/roadmap',
    title: 'Docker Roadmap',
    description: 'Follow a structured 15-step path from Docker basics to production deployment.',
    icon: <ArrowRightIcon className="w-8 h-8" />,
  },
  {
    href: '/commands',
    title: 'Docker Commands',
    description: 'Browse a categorized reference of essential Docker commands with examples.',
    icon: <CodeIcon className="w-8 h-8" />,
  },
  {
    href: '/labs',
    title: 'Docker Labs',
    description: 'Hands-on labs: follow the corrected lab or test your skills with the practice lab.',
    icon: <CheckCircleIcon className="w-8 h-8" />,
  },
  {
    href: '/deployment',
    title: 'Deployment Guide',
    description: 'Learn to deploy this Next.js site to GitHub Pages and Netlify.',
    icon: <CloudIcon className="w-8 h-8" />,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-padding relative" id="what-you-learn">
        <Container>
          <SectionTitle
            title="What You Will Learn"
            subtitle="A comprehensive Docker curriculum designed for beginners and intermediate developers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnItems.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-dark-800/50 relative" id="why-docker">
        <Container>
          <SectionTitle
            title="Why Docker Matters"
            subtitle="Docker has transformed how modern applications are built, shipped, and deployed."
          />
          <div className="max-w-3xl mx-auto">
            <WhyDockerCarousel benefits={benefits} />
          </div>
        </Container>
      </section>

      <section className="section-padding relative" id="course-structure">
        <Container>
          <SectionTitle
            title="Course Structure"
            subtitle="Explore every part of this Docker mastery course."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursePages.map((page, i) => (
              <Link
                key={i}
                href={page.href}
                className="glass-card p-6 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-docker-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-docker-500/10 flex items-center justify-center text-docker-400 mb-4 group-hover:bg-docker-500/20 group-hover:scale-110 transition-all duration-300">
                    {page.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-docker-400 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{page.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
