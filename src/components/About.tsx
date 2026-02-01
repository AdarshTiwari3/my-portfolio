import { Section } from "./Section";

interface AboutContent {
  paragraphs: string[];
}

export function About() {
  const about: AboutContent = {
    paragraphs: [
      "Software Engineer at Genpact with a focus on building scalable, production-grade systems for enterprise clients. Experienced in developing data-intensive dashboards and real-time communication platforms using modern web technologies.",
      "Strong foundation in system design, low-level design principles, and full-stack development. Passionate about writing clean, maintainable code and solving complex technical challenges with elegant solutions.",
    ],
  };

  return (
    <Section id="about" title="About">
      <div className="bg-surface border border-border rounded-lg p-6 max-w-3xl">
        {about.paragraphs.map((text, index) => (
          <p
            key={index}
            className={`text-lg text-textSecondary leading-relaxed ${
              index !== about.paragraphs.length - 1 ? "mb-4" : ""
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}
