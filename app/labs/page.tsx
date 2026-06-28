import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import LabsTabs from '@/components/labs/LabsTabs';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Docker Labs - Corrected & Practice',
  description:
    'Hands-on Docker labs. Follow the corrected lab to containerize a Node.js app step by step, or test your skills with the practice lab.',
  path: '/labs',
  ogTitle: 'Docker Labs - Hands-on Containerization Practice',
});

export default function LabsPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          title="Docker Labs"
          subtitle="Practice containerization with step-by-step guidance or test your skills on your own."
        />
        <LabsTabs />
      </Container>
    </section>
  );
}
