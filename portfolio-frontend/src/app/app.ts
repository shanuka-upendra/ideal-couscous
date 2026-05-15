import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly profile = {
    name: 'Your Name',
    role: 'Front-End Developer',
    summary:
      'I build fast, accessible, and expressive web interfaces with Angular and TypeScript.'
  };

  protected readonly skills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'HTML5',
    'CSS3',
    'REST APIs'
  ];

  protected readonly projects = [
    {
      title: 'Project One',
      description: 'A short description of your project and the problem it solves.',
      stack: 'Angular, TypeScript'
    },
    {
      title: 'Project Two',
      description: 'Another project highlight with impact and key feature details.',
      stack: 'Angular, RxJS'
    }
  ];

  protected readonly highlights = [
    '4+ years building front-end products',
    'Focused on performance and accessibility',
    'Strong component-driven UI architecture'
  ];

  protected readonly timeline = [
    {
      year: '2026',
      title: 'Portfolio v1 launched',
      text: 'Built a retro-themed personal site with Angular.'
    },
    {
      year: '2025',
      title: 'Enterprise dashboard work',
      text: 'Shipped complex analytics UI with reusable components.'
    }
  ];
}
