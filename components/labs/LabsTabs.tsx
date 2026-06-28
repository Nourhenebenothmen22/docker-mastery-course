'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import CodeBlock from '@/components/shared/CodeBlock';
import { InfoIcon, CheckIcon, WarningIcon, ArrowRightIcon } from '@/data/icons';
import { correctedLab, practiceLab } from '@/data/labs';
import type { CorrectedLabStep, PracticeLabTask } from '@/types';

type LabMode = 'corrected' | 'practice';

export default function LabsTabs() {
  const [mode, setMode] = useState<LabMode>('corrected');

  const tabClass = (active: boolean) =>
    cn(
      'px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200',
      active
        ? 'bg-docker-500/20 text-docker-400 shadow-lg shadow-docker-500/10'
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-8 p-1.5 bg-dark-800/50 rounded-xl border border-white/5 w-fit" role="tablist">
        <button
          onClick={() => setMode('corrected')}
          className={tabClass(mode === 'corrected')}
          role="tab"
          aria-selected={mode === 'corrected'}
        >
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4" />
            Corrected Lab
          </span>
        </button>
        <button
          onClick={() => setMode('practice')}
          className={tabClass(mode === 'practice')}
          role="tab"
          aria-selected={mode === 'practice'}
        >
          <span className="flex items-center gap-2">
            <WarningIcon className="w-4 h-4" />
            Practice Lab
          </span>
        </button>
      </div>

      {mode === 'corrected' ? <CorrectedView /> : <PracticeView />}
    </div>
  );
}

function CorrectedView() {
  return (
    <div>
      <div className="mb-8 p-4 bg-docker-500/5 border border-docker-500/20 rounded-lg flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-docker-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-docker-300 text-sm font-semibold mb-1">Lab Objective</p>
          <p className="text-gray-300 text-sm">{correctedLab.objective}</p>
        </div>
      </div>

      <div className="space-y-8">
        {correctedLab.steps.map((step: CorrectedLabStep, index) => (
          <LabStepCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}

function LabStepCard({ step, index }: { step: CorrectedLabStep; index: number }) {
  return (
    <div className="glass-card p-6">
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
  );
}

function PracticeView() {
  return (
    <div>
      <div className="mb-8 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg flex items-start gap-3">
        <WarningIcon className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-yellow-300 text-sm font-semibold mb-1">Instructions</p>
          <p className="text-gray-300 text-sm">
            This lab does not include the full solution. Complete each task using your knowledge. Use hints if you get stuck,
            and check your progress against the checkpoints. Switch to the corrected tab for the full solution.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {practiceLab.tasks.map((task: PracticeLabTask, index) => (
          <PracticeTaskCard key={index} task={task} index={index} />
        ))}
      </div>
    </div>
  );
}

function PracticeTaskCard({ task, index }: { task: PracticeLabTask; index: number }) {
  return (
    <div className="glass-card p-6">
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
  );
}
