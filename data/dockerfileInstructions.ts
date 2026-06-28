import type { DockerfileInstruction } from '@/types';

export const dockerfileInstructions: DockerfileInstruction[] = [
  { label: 'FROM', desc: 'Base image (Node.js on Alpine Linux)' },
  { label: 'WORKDIR', desc: 'Set working directory inside container' },
  { label: 'COPY', desc: 'Copy files from host to container' },
  { label: 'RUN', desc: 'Execute commands during build' },
  { label: 'EXPOSE', desc: 'Document which port the app uses' },
  { label: 'CMD', desc: 'Default command when container starts' },
];
