import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/shared/PageHeader';
import { practiceLab } from '@/data/labs';
import { createPageMetadata } from '@/lib/metadata';
import { WarningIcon, ArrowRightIcon, CheckIcon } from '@/data/icons';

export const metadata: Metadata = createPageMetadata({
  title: 'Practice Lab - Docker Node.js Lab',
  description:
    'Practice your Docker skills with an incomplete Node.js lab. Complete the tasks, debug errors, and verify your Docker knowledge.',
  path: '/labs/practice',
  ogTitle: 'Practice Docker Lab - Test Your Skills',
});

export default function PracticeLabPage() {
  return (
    <section className="section-padding">
      <Container>
        <PageHeader title={practiceLab.title} subtitle={practiceLab.objective} />

        <div className="mb-8 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg flex items-start gap-3">
          <WarningIcon className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-yellow-300 text-sm font-semibold mb-1">Instructions</p>
            <p className="text-gray-300 text-sm">
              This lab does not include the full solution. Complete each task using your knowledge. Use hints if you get stuck,
              and check your progress against the checkpoints. If you need help, the corrected lab has the complete solution.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {practiceLab.tasks.map((task, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-dark-600 border border-docker-500/30 flex items-center justify-center text-docker-400 text-sm font-bold shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{task.title}</h3>
                  <p className="text-gray-400 text-sm">{task.description}</p>

                  {task.hint && (
                    <div className="mt-3 p-3 bg-docker-500/5 border border-docker-500/10 rounded-lg">
                      <span className="text-xs font-semibold text-docker-400 uppercase tracking-wider block mb-1">Hint</span>
                      <p className="text-gray-300 text-sm">{task.hint}</p>
                    </div>
                  )}

                  {task.checkpoint && (
                    <div className="mt-3 flex items-start gap-2">
                      <ArrowRightIcon className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-blue-300 text-xs">{task.checkpoint}</span>
                    </div>
                  )}

                  {task.expectedResult && (
                    <div className="mt-2 flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-green-300 text-xs">Expected: {task.expectedResult}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card">
          <div>
            <h3 className="text-lg font-bold text-white">Need the full solution?</h3>
            <p className="text-gray-400 text-sm">Check the corrected lab for complete step-by-step instructions.</p>
          </div>
          <Link href="/labs/corrected" className="btn-primary shrink-0">
            View Corrected Lab
          </Link>
        </div>
      </Container>
    </section>
  );
}
