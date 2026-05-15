import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly profile = {
    name: 'Your Name',
    role: 'Angular Front-End Developer',
    summary:
      'I build responsive, accessible, and scalable web interfaces with Angular and modern CSS.'
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
}
