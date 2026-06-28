import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/shared/PageHeader';
import CommandCard from '@/components/shared/CommandCard';
import CodeBlock from '@/components/shared/CodeBlock';
import { commandCategories } from '@/data/commands';
import { dockerfileInstructions } from '@/data/dockerfileInstructions';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Docker Commands',
  description:
    'Complete reference of essential Docker commands. Includes images, containers, volumes, networks, Docker Compose, and cleanup commands with examples.',
  path: '/commands',
  ogTitle: 'Docker Commands - Complete Reference Guide',
});

export default function CommandsPage() {
  return (
    <section className="section-padding">
      <Container>
        <PageHeader
          title="Docker Commands"
          subtitle="A complete categorized reference of Docker commands with explanations and real-world examples."
        />

        <div className="space-y-16">
          {commandCategories.map((category) => (
            <section key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.title}</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-docker-500 to-blue-600 rounded-full mb-4" />
                <p className="text-gray-400">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.commands.map((cmd, i) => (
                  <CommandCard key={`${category.title}-${i}`} command={cmd} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16" id="dockerfile-example">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Dockerfile Example</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-docker-500 to-blue-600 rounded-full mb-4" />
            <p className="text-gray-400">
              A Dockerfile defines how to build a Docker image. Below is an example for a Node.js application.
            </p>
          </div>
          <CodeBlock
            title="Dockerfile"
            language="dockerfile"
            code={`FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {dockerfileInstructions.map((item) => (
              <div key={item.label} className="glass-card p-3">
                <code className="text-docker-400 text-sm font-mono">{item.label}</code>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" id="compose-example">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Docker Compose Example</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-docker-500 to-blue-600 rounded-full mb-4" />
            <p className="text-gray-400">
              Docker Compose lets you define and run multi-container applications with a single YAML file.
            </p>
          </div>
          <CodeBlock
            title="docker-compose.yml"
            language="yaml"
            code={`version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  db:
    image: mongo:latest
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:`}
          />
        </section>
      </Container>
    </section>
  );
}
