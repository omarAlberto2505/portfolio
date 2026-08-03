export interface Skill {
  title: string;
  details: string;
}

export const skills: Skill[] = [
  {
    title: 'Frontend',
    details: 'React, Angular, Vue, HTML5, Next, CSS3, JavaScript (ES6+), TypeScript, D3, Zustand, ReactQuery',
  },
  {
    title: 'Backend',
    details: 'Node.js (Express, Fastify), .NET Core, Flask, Ruby on Rails, Python (FastAPI), Go (Gin)',
  },
  {
    title: 'Cloud & DevOps',
    details: 'Docker, Kubernetes, AWS Lambda, ECS, ECR, Elastic Beanstalk, S3, Textract, Route54',
  },
  {
    title: 'Databases',
    details: 'Oracle, SQL Server, MySQL, MongoDB',
  },
  {
    title: 'AI & Platforms',
    details: 'Microsoft Copilot, MCP protocol, Power Automate, WCF/SOAP, SAP integration',
  },
  {
    title: 'Ways of Working',
    details:
      'Mentoring, Pair Programming, Agile/Scrum, Jira, Code Reviews, Cross-functional Collaboration, Problem Solving, Communication, Adaptability',
  },
];