import type { DockerCommand } from '@/types';
import { WarningIcon } from '@/data/icons';

interface CommandCardProps {
  command: DockerCommand;
}

export default function CommandCard({ command }: CommandCardProps) {
  return (
    <div className="glass-card p-5">
      <div className="code-block mb-3">
        <code className="text-docker-300 text-sm">{command.command}</code>
      </div>
      <p className="text-gray-300 text-sm mb-2">{command.description}</p>
      <div className="text-gray-500 text-xs mb-2">
        <span className="text-gray-400">Example: </span>
        <code className="text-gray-300 bg-dark-700 px-1.5 py-0.5 rounded text-xs">{command.example}</code>
      </div>
      {command.warning && (
        <div className="flex items-start gap-2 mt-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <WarningIcon className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
          <span className="text-yellow-300 text-xs">{command.warning}</span>
        </div>
      )}
    </div>
  );
}
