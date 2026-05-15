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
      'Dedicated Software Engineering professional with a strong foundation in full-stack development, focused on building scalable applications using Java, Spring Boot, and Angular.'
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
        'Developed a secure legal-domain AI gateway with data filtering and token-based authentication.',
      stack: 'Java, Spring Boot, Angular, PostgreSQL, JWT, Groq LLM, Google Gemini'
    },
    {
      title: 'EVORA — Event Management Platform (Group Project)',
      description:
        'Built core event management features in a collaborative team environment using layered backend architecture.',
      stack: 'Java, Spring Boot, RESTful APIs, Layered Architecture, Singleton Pattern'
    },
    {
      title: 'HeloCare Pharmacy Inventory Management System',
      description:
        'Created a desktop inventory solution with stock handling and reporting for pharmacy workflows.',
      stack: 'Java, JavaFX, MySQL, JDBC, Scene Builder'
    },
    {
      title: 'Thogakade POS Management System',
      description:
        'Implemented a full-stack POS application with layered architecture and API-driven Angular frontend.',
      stack: 'Java, Spring Boot, Angular, TypeScript, RESTful APIs, MySQL'
    }
  ];

  protected readonly highlights = [
    'Learning by doing mindset with continuous practical project work',
    'Fluent collaboration in agile and team-based environments',
    'Spoken languages: Sinhala (Native), English (Fluent)'
  ];

  protected readonly experience = {
    title: 'Learning Management System (LMS) Administrator',
    organization: 'BEICT Administration Branch, Horana, Sri Lanka',
    period: 'Aug 2023 – Mar 2025',
    summary:
      'Managed scalable LMS infrastructure and secure role-based access, supporting uninterrupted service for over 2,500 global users.'
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
