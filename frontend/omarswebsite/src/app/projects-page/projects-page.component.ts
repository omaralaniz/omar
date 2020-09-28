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
import * as keyframe from './keyframes'

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
    trigger('page1State', [
      state('hide', style({
      })),
      state('show',   style({
        width: '25%',
        height: '25%', 
        opacity: '.5'
      })),
      transition('hide => show', animate('170ms ease-out')),
      transition('show => hide', animate('170ms ease-in')),
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
      transition('hide => show', animate('170ms ease-out')),
      transition('show => hide', animate('170ms ease-in'))
    ]),
    //TODO: finish card pop-up when description appears
    // trigger('card', [
    //   state('hide', style({
    //   })),
    //   state('show',   style({
    //     width: '300px',
    //     height: '400px'
    //   })),
    //   transition('hide => show', animate('150ms ease-out')),
    //   transition('show => hide', animate('150ms ease-in'))
    // ]),
    trigger('cardAnimation', [
      transition('*=>*', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes(keyframe.cardAnimation))
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
