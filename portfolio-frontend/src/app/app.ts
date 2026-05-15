import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly profile = {
    name: 'Shanuka Upendra',
    role: 'Intern Software Engineer',
    mobile: '+94 77 5456105',
    email: 'shanukaupendra@gmail.com',
    linkedin: 'https://linkedin.com/in/shanukaupendraofficial/',
    github: 'https://github.com/shanuka-upendra',
    summary:
      'Intern Software Engineer with hands-on full-stack project experience in Java, Spring Boot, and Angular. I focus on clean architecture, practical problem-solving, and building scalable web applications.'
  };

  protected readonly skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Spring Boot',
    'Angular',
    'Hibernate / JPA',
    'Bootstrap',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'RESTful APIs',
    'MySQL',
    'PostgreSQL',
    'Postman',
    'Maven',
    'JavaFX (Scene Builder)',
    'JasperReports',
    'Figma',
    'Agile',
    'MVC Architecture',
    'Layered Architecture',
    'Factory Design Pattern'
  ];

  protected readonly projects = [
    {
      title: 'SecureLaw — Legal AI Gateway and Data Filtering System',
      description:
        'Built a secure legal-domain AI gateway with request filtering, token-based authentication, and controlled model access.',
      stack: 'Java, Spring Boot, Angular, PostgreSQL, JWT, Groq LLM, Google Gemini',
      tags: ['Collaborative', 'Full-Stack', 'AI Integration']
    },
    {
      title: 'EVORA — Event Management Platform (Group Project)',
      description:
        'Contributed to a team-based event platform by implementing core modules with a layered backend design and REST APIs.',
      stack: 'Java, Spring Boot, RESTful APIs, Layered Architecture, Singleton Pattern',
      tags: ['Team Project', 'Backend-Focused', 'Web Platform']
    },
    {
      title: 'HeloCare Pharmacy Inventory Management System',
      description:
        'Developed a desktop inventory system for pharmacy operations including stock tracking, item handling, and reporting flows.',
      stack: 'Java, JavaFX, MySQL, JDBC, Scene Builder',
      tags: ['Solo Project', 'Desktop App', 'Inventory System']
    },
    {
      title: 'Thogakade POS Management System',
      description:
        'Delivered a full-stack POS system using layered architecture, REST services, and an Angular-based frontend experience.',
      stack: 'Java, Spring Boot, Angular, TypeScript, RESTful APIs, MySQL',
      tags: ['Full-Stack', 'POS System', 'Web App']
    }
  ];

  protected readonly highlights = [
    'Strong "learn by doing" mindset with consistent project execution',
    'Comfortable in agile teamwork, peer collaboration, and iterative delivery',
    'Languages: Sinhala (Native), English (Fluent)'
  ];

  protected readonly experience = {
    title: 'Learning Management System (LMS) Administrator',
    organization: 'BEICT Administration Branch, Horana, Sri Lanka',
    period: 'Aug 2023 – Mar 2025',
    summary:
      'Managed LMS operations and role-based access control, helping maintain stable service for more than 2,500 global users.'
  };

  protected readonly education = [
    {
      title: 'Diploma in Software Engineering (iCD)',
      institute: 'Institute of Computer Engineering Technology (ICET), Panadura'
    },
    {
      title: 'Foundation in Information Technology (FIT)',
      institute: 'University of Colombo School of Computing (UCSC), Colombo'
    },
    {
      title: 'G.C.E. Advanced Level',
      institute: 'St. John’s College, Nugegoda'
    },
    {
      title: 'Diploma in English (Pearson UK)',
      institute: 'ESOFT Metro Campus'
    }
  ];

  protected readonly timeline = [
    {
      year: '2025',
      title: 'LMS Administration Experience',
      text: 'Scaled LMS operations and access management for thousands of users.'
    },
    {
      year: 'Now',
      title: 'Intern Software Engineer Path',
      text: 'Building real-world full-stack systems with Java, Spring Boot, and Angular.'
    }
  ];
}
