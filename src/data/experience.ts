export interface Role {
  title: string;
  company: string;
  location: string;
  start: string;      // shown on the page
  end: string;
  startIso: string;   // for search engines and screen readers
  endIso: string;
  duration: string;
  points: string[];
  tools: string[];
}

export const experience: Role[] = [
  {
    title: 'QA Tester',
    company: 'DAI',
    location: 'Quezon City',
    start: 'Feb 2026',
    end: 'Aug 2026',
    startIso: '2026-02',
    endIso: '2026-08',
    duration: '6 months',
    points: [
      'Tested multiple HRIS modules end to end, checking behavior against the BRD and the requirements traceability matrix.',
      'Wrote and ran step-by-step test cases from business requirements, covering positive and negative scenarios.',
      'Ran functional, regression, smoke, exploratory and UAT testing.',
      'Logged defects in Jira with reproduction steps, expected and actual results, and screenshot evidence, then retested each fix before closing it.',
      "Produced step-by-step execution reports with screenshot evidence using the team's Excel VBA workflow.",
      'Worked with business analysts and developers to clarify requirements and investigate reported issues.',
      'Recorded browser flows with Playwright Codegen as a first step toward automated tests.',
    ],
    tools: ['Jira', 'Excel', 'Playwright', 'Microsoft Teams'],
  },
  {
    title: 'IT Intern, Team Lead',
    company: 'ETIQA Philippines',
    location: 'Makati',
    start: 'Feb 2025',
    end: 'May 2025',
    startIso: '2025-02',
    endIso: '2025-05',
    duration: '4 months',
    points: [
      'Led a small team automating business reports and assigned tasks across the group.',
      'Built Excel VBA automation that cut manual reporting work by 30%.',
      'Collected, cleaned and validated datasets so business reports stayed accurate and consistent.',
    ],
    tools: ['Excel VBA', 'Data validation'],
  },
];