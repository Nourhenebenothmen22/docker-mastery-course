import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/shared/PageHeader';
import CodeBlock from '@/components/shared/CodeBlock';
import { correctedLab } from '@/data/labs';
import { createPageMetadata } from '@/lib/metadata';
import { InfoIcon, CheckIcon } from '@/data/icons';

export const metadata: Metadata = createPageMetadata({
  title: 'Corrected Lab - Containerize a Node.js App',
  description:
    'Step-by-step corrected Docker lab. Learn to containerize a Node.js application with Dockerfile, build, run, and manage containers.',
  path: '/labs/corrected',
  ogTitle: 'Corrected Docker Lab - Node.js Containerization',
});

export default function CorrectedLabPage() {
  return (
    <section className="section-padding">
      <Container>
        <PageHeader title={correctedLab.title} subtitle={correctedLab.objective} />

        <div className="mb-8 p-4 bg-docker-500/5 border border-docker-500/20 rounded-lg flex items-start gap-3">
          <InfoIcon className="w-5 h-5 text-docker-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-docker-300 text-sm font-semibold mb-1">Lab Objective</p>
            <p className="text-gray-300 text-sm">{correctedLab.objective}</p>
          </div>
        </div>

        <div className="space-y-8">
          {correctedLab.steps.map((step, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-docker-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                </div>
              </div>

              {step.code && <CodeBlock code={step.code} language={step.codeLanguage} />}

              {step.expectedResult && (
                <div className="mt-3 p-3 bg-green-500/5 border border-green-500/20 rounded-lg flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-green-400 uppercase">Expected Result</span>
                    <p className="text-green-300 text-sm">{step.expectedResult}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to test your skills?</h3>
            <p className="text-gray-400 text-sm">Try the practice lab without the full solution.</p>
          </div>
          <Link href="/labs/practice" className="btn-primary shrink-0">
            Go to Practice Lab
          </Link>
        </div>
      </Container>
    </section>
  );
}
