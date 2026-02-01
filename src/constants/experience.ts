import type { ExperienceData } from "../types/experience";

export const EXPERIENCE: ExperienceData = {
  current: {
    role: "Software Engineer",
    company: "Genpact",
    period: "Jul 2023 – Present",
    projects: [
      {
        title: "PredictPro – Forecasting Platform",
        bullets: [
          "Developed and enhanced enterprise forecasting dashboards for pharmaceutical demand planning",
          "Optimized backend APIs reducing response time by ~40% through efficient data aggregation",
          "Implemented complex data visualizations handling millions of time-series data points",
        ],
      },
      {
        title: "iBot Smart Assist – Enterprise Chat Platform",
        bullets: [
          "Built a production-grade chat interface using React and TypeScript supporting 500+ concurrent users",
          "Reduced chat history load time by ~40% through pagination and lazy loading",
          "Integrated ServiceNow workflows to enable automated ticket creation and resolution from chat interactions",
          "Optimized frontend rendering performance using memoization techniques to reduce unnecessary re-renders",
          "Improved overall UI responsiveness and stability under high interaction frequency",
        ],
      },
    ],
  },
  intern: {
    role: "Software Engineer Intern",
    company: "Genpact",
    period: "Jan 2023 – Jun 2023",
    bullets: [
      "Developed React components for internal dashboards and analytics tools",
      "Collaborated with senior engineers on API integration and state management",
      "Contributed to improving code quality through TypeScript adoption",
    ],
  },
};
