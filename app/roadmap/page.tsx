import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/shared/PageHeader';
import RoadmapStepCard from '@/components/roadmap/RoadmapStepCard';
import { roadmapSteps } from '@/data/roadmap';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Docker Roadmap',
  description:
    'Follow a complete 15-step Docker learning roadmap from installation to deployment. Perfect for beginners and intermediate developers.',
  path: '/roadmap',
  ogTitle: 'Docker Roadmap - Learn Docker Step by Step',
});

export default function RoadmapPage() {
  return (
    <section className="section-padding">
      <Container>
        <PageHeader
          title="Docker Learning Roadmap"
          subtitle="Follow this structured 15-step path to master Docker from fundamentals to production deployment."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-docker-500 via-blue-600 to-docker-500/20 transform md:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <RoadmapStepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
