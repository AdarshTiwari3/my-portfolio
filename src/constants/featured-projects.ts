import type { Project } from "../types/projects";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "PredictPro – Forecasting Platform",
    company: "Genpact",
    client: "Merck",
    description:
      "Enterprise-grade forecasting dashboards designed for pharmaceutical demand planning. Built complex data visualization interfaces handling millions of data points with interactive analytics and performant data fetching.",
    impact: [
      "Improved API response time by ~40% through query optimization and caching strategies",
      "Enhanced forecasting accuracy by ~25% through improved data processing pipelines",
      "Reduced dashboard load time from 8s to 3s for better user experience",
    ],
    tech: [
      "React",
      "TypeScript",
      "Flask",
      "PostgreSQL",
      "Redux",
      "Chart.js",
    ],
  },
  {
    title: "iBot Smart Assist – Enterprise Chat Platform",
    company: "Genpact",
    description:
      "An enterprise chat platform with LLM-driven workflows for automated support and internal knowledge sharing. Designed to handle high user concurrency with responsive chat interactions and scalable backend integrations.",
    impact: [
      "Built a production-grade chat UI with React and TypeScript supporting 500+ concurrent users",
      "Optimized chat history retrieval from 15s to 9s using pagination and lazy loading",
      "Integrated backend services with LLM workflows to automate internal knowledge queries and responses",
      "Optimized frontend rendering performance using memoization techniques (useMemo, useCallback) to reduce unnecessary re-renders",
      "Integrated ServiceNow workflows to enable automated ticket creation and resolution from chat interactions",
      "Improved overall application responsiveness and stability under high user load",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "LangGraph",
      "ServiceNow",
      "Shadcn/ui",
      "Radix UI",
      "Context API",
    ],
  },
];
