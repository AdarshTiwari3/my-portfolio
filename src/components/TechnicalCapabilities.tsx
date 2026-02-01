import { Section } from './Section';
import { SkillCard } from './SkillCard';

interface Capability {
  title: string;
  skills: string[];
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Frontend Engineering',
    skills: [
      'React, TypeScript, modern JavaScript (ES6+)',
      'State management with Redux Toolkit, Zustand, Context API',
      'Responsive design with Tailwind CSS',
      'Performance optimization, memoization, and lazy loading',
      'Component architecture and design systems'
    ]
  },
  {
    title: 'Backend & APIs',
    skills: [
      'FastAPI, Flask for RESTful services',
      'PostgreSQL, database design and query optimization',
      'API design and documentation',
      'Caching strategies with Redis'
    ]
  },
  {
    title: 'System Design & LLD',
    skills: [
      'SOLID principles and design patterns',
      'Object-oriented design and architecture',
      'Scalability and performance considerations',
      'Real-world LLD implementations'
    ]
  },
  {
    title: 'Tooling & Practices',
    skills: [
      'Git version control and collaboration',
      'CI/CD pipelines and deployment',
      'Agile development and cross-functional collaboration',
      'Testing with Vitest, React Testing Library, Pytest',
      'Code review and testing practices',
      'Performance monitoring and debugging'
    ]
  }
];

export function TechnicalCapabilities() {
  return (
    <Section id="capabilities" title="Technical Capabilities" className="bg-bg">
      <div className="grid md:grid-cols-2 gap-6">
        {CAPABILITIES.map((capability) => (
          <SkillCard key={capability.title} {...capability} />
        ))}
      </div>
    </Section>
  );
}
