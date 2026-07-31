import { ReactNode } from "react";

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
  description: ReactNode;
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


export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer Technician',
    company: 'Robert Bosch',
    location: 'Juarez, Chihuahua',
    period: '09-2023 – Present',
    description: <div>
        • Designed and deployed Microsoft Copilot Agents with enterprise knowledge grounding and tool integrations.<br/>
        • Architected MCP services in TypeScript and Python connected through a Go API Gateway, reducing information
        retrieval from minutes to seconds. <br/>
        • Designed scalable backend services and API gateways following SOLID principles. <br/>
        • Integrated proprietary manufacturing systems with SAP using WCF middleware and .NET services. <br/>
        • Designed Oracle schemas, Express backend services, Docker/Kubernetes deployments, and Angular modules for
        an enterprise laboratory platform.
      </div>
  },
  {
    role: 'Developer',
    company: 'Inteligene',
    location: 'Juarez, Chihuahua',
    period: '05-2021 – 09-2023',
    description:
      <div>
      •  Developed OCR solutions using AI research and Tesseract.js for document processing.<br/>
      •  Built REST APIs using Fastify and Express with Sequelize ORM.<br/>
      •  Designed SQL queries and interactive visualizations using D3.js.<br/>
      •  Developed real-time applications using React and Socket.IO.<br/>
      •  Built Flask microservices deployed to AWS Lambda using Docker, ECR, and automated CI/CD pipelines.<br/>
      •  Authored technical documentation for both automated and manual workflows
      </div>
  },
  {
    role: 'Web Developer Assistant',
    company: 'Inteligene',
    location: 'Juarez, Chihuahua',
    period: '03-2020 – 05-2022',
    description:
      <div>
      •  Developed manufacturing web applications compliant with Mexican regulations. <br/>
      •  Deployed Ruby on Rails applications to AWS Elastic Beanstalk. <br/>
      •  Migrated legacy R applications into AWS Lambda microservices, reducing monthly infrastructure costs by approximately 50%. <br/>
      </div>
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
