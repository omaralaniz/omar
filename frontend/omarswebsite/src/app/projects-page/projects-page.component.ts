import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ProjectsService } from '../projects.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations:[
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms ease-in', style({opacity: 1})),
      ])
    ]),
    trigger('easeIn', [
      state('hide', style({
      })),
      state('show',   style({
      })),
      transition('show => hide', animate('1s ease-out')),
      transition('hide => show', animate('1s ease-in'))
    ]),
    trigger('page1State', [
      state('hide', style({
      })),
      state('show',   style({
        width: '25%',
        height: '25%', 
        opacity: '.5'
      })),
      transition('hide => show', animate('150ms ease-out')),
      transition('show => hide', animate('150ms ease-in'))
    ]),
    trigger('page2State', [
      state('hide', style({
        width: '25%',
        height: '25%',
        opacity: '.5' 
      })),
      state('show',   style({
        width: '40%',
        height: '40%',
        opacity: '1' 
      })),
      transition('hide => show', animate('150ms ease-out')),
      transition('show => hide', animate('150ms ease-in'))
    ]),
    trigger('cardAnimation', [
      transition('*=>*', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(100%) scale(.5)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(10px) scale(.75)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])) 
        ]), {optional: true})
      ])
    ])
  ]
})
export class ProjectsPageComponent implements OnInit {
  projects = [];
  state = 'show';

  states = this.projects.map(()=> 'show');

  constructor(private projectsService: ProjectsService) {
    this.getProjects();
    this.states;
  }

  ngOnInit() {
  }

  async getProjects(){
    this.projects = await this.projectsService.getProjects();
  }

  toggle(i: number){
    this.states[i] = this.states[i] === 'show' ? 'hide' : 'show'; 
  }
}
