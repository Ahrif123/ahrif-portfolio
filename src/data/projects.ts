export interface Project {
  name: string;
  summary: string;
  tech: string[];
  url: string;
}

export const projects: Project[] = [
  {
    name: 'Test Case Manager',
    summary: 'A web app for writing, organizing and tracking test cases, with live pass/fail stats and filters. I built it to manage the kind of test suites I write at work.',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    url: 'https://ahrifhajjiercruz-tech.github.io/ahrif-portfolio/projects/index.html',
  },
  {
    name: 'Bug Tracker',
    summary: 'A lightweight bug tracker with priority levels, status tracking and detailed reports, modeled on how I logged defects in Jira.',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    url: 'https://ahrifhajjiercruz-tech.github.io/ahrif-portfolio/projects/bug-tracker/index.html',
  },
];