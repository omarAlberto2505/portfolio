export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  education: string;
  summary: string;
  heroCopy: string;
  githubUrl: string;
}

export interface Skill {
  title: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Contact {
  prompt: string;
}

export const profile: Profile = {
  name: 'Omar Alberto Murillo Moreno',
  title: 'Full-stack Engineer | AI Agent Platforms',
  location: 'Juarez City, Chihuahua, Mexico',
  email: 'omaralberto7276@gmail.com',
  education: 'Bachelor of Mechatronic Engineering, ITCJ',
  summary: 'I specialize in modern web applications, APIs, and AI agent platforms. I build reliable, high-performance systems using React, TypeScript, Go, Python, and cloud-native architecture.',
  heroCopy:
    'I build modern, responsive web experiences that help teams turn ideas into polished digital products while delivering maintainable backend services, AI integrations, and enterprise-grade APIs.',
  githubUrl: 'https://github.com/yourusername',
};

export const skills: Skill[] = [
  {
    title: 'Frontend',
    details: 'React, Angular, Vue, HTML5, CSS3, JavaScript (ES6+), TypeScript',
  },
  {
    title: 'Backend',
    details: 'Node.js (Express, Fastify), .NET Core, Flask, Ruby on Rails, Python (FastAPI)',
  },
  {
    title: 'Cloud & DevOps',
    details: 'Docker, Kubernetes, AWS Lambda, ECS, ECR, Elastic Beanstalk, S3, Textract',
  },
  {
    title: 'AI & Platforms',
    details: 'Microsoft Copilot, MCP protocol, Power Automate, WCF/SOAP, SAP integration',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer Technician',
    company: 'Robert Bosch',
    location: 'Juarez, Chihuahua',
    period: '09-2023 – Present',
    description:
      'Led the design and deployment of Microsoft Copilot Agents, knowledge grounding, tool integration, and instruction frameworks. Architected MCP services in TypeScript and Python with a Go-based API gateway to accelerate data access workflows.',
  },
  {
    role: 'Developer',
    company: 'Independent Projects',
    location: 'Juarez, Chihuahua',
    period: '05-2021 – 09-2023',
    description:
      'Implemented OCR capabilities with Tesseract, built APIs using Fastify and Express, and deployed Flask microservices to AWS Lambda with Docker, ECR, and CI/CD automation.',
  },
  {
    role: 'Web Developer Assistant',
    company: 'Manufacturing Websites',
    location: 'Juarez, Chihuahua',
    period: '03-2020 – 05-2022',
    description:
      'Maintained manufacturing websites, deployed Ruby on Rails applications to AWS Elastic Beanstalk, and migrated legacy analytics services to serverless microservices.',
  },
];

export const projects: Project[] = [
  {
    title: 'Microsoft Copilot Agent Platform',
    description:
      'Designed and deployed Copilot Agents with knowledge grounding, tool integrations, and instruction frameworks. Built an MCP service stack in TypeScript and Python connected through a Go-based API gateway, reducing information retrieval times from minutes to seconds.',
  },
  {
    title: 'Scalable API Gateway & Data Platform',
    description:
      'Architected a high-performance Go API gateway and Express backend using Clean Architecture. Implemented Oracle database schemas, Docker/Kubernetes deployments, and Angular enhancements for a laboratory data platform.',
  },
  {
    title: 'AI OCR & AWS Microservices',
    description:
      'Built OCR capabilities using Tesseract, integrated visualizations with D3.js, and deployed Flask-based AWS Lambda microservices through Docker and automated pipelines.',
  },
];

export const contact: Contact = {
  prompt:
    'I’m available for full-stack and AI platform work. Reach out to discuss your next engineering or cloud project.',
};

export const resumeUrl = '/resume.pdf';
