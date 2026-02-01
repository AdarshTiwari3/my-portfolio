import type { Project } from "../types/projects";
export const OTHER_PROJECTS: Project[] = [
  {
    title: "Low-Level Design Implementations",
    description:
      "Collection of system design implementations demonstrating SOLID principles and design patterns. Includes Task Manager, Logger Framework with multiple log levels and outputs, and Traffic Signal Controller with state machine pattern.",
    impact: [
      "Implemented Observer pattern for real-time task updates",
      "Applied Strategy pattern for flexible logging configurations",
      "Used State pattern for traffic signal transitions",
    ],
    tech: ["Python", "Design Patterns", "SOLID Principles", "OOP", "LLD"],
    link:"https://github.com/AdarshTiwari3/system-design/tree/main/low_level_design"
  },
  {
    title: "COVID-19 Tracker",
    description:
      "Real-time COVID-19 statistics visualization tool with interactive charts and country-wise data filtering. Built responsive UI with clean data presentation and multiple view modes.",
    impact: [
      "Integrated public COVID-19 API for real-time data",
      "Built responsive charts and data visualizations",
      "Implemented search and filter functionality",
    ],
    tech: ["React", "JavaScript", "Chart.js", "REST API", "CSS"],
    link: "https://covid-19-tracker-a05a1.web.app"
  },
];
