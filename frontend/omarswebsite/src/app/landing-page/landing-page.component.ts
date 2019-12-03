import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('bottom', [
      transition(':enter', [
        animate('1s ease-in', keyframes([
          style({transform: 'translate(1%, 2%)', opacity: 0, offset: .0}),
          style({transform: 'translate(0%)', opacity: .2, offset: .4}),
          style({transform: 'translate(-2%, -0%)', opacity: .4, offset: .6}),
          style({transform: 'translate(0%)', opacity: .6, offset: .8}),
          style({transform: 'translateY(-2%)', opacity: 8, offset: .9}),
          style({transform: 'translate(0%)', opacity: 1, offset: 1}),
        ]))
      ])
    ]),
    trigger('top', [
      transition(':enter', [
        animate('1s ease-in',  keyframes([
          style({transform: 'translate(-2%, 107%)', opacity: 0, offset: .0}),
          style({transform: 'translate(-1%,108%)', opacity: .2, offset: .4}),
          style({transform: 'translate(2%, 109%)', opacity: .4, offset: .6}),
          style({transform: 'translate(-1%,108%)', opacity: .6, offset: .8}),
          style({transform: 'translateY(107%)', opacity: .8, offset: .9}),
          style({transform: 'translate(-1%,108%)', opacity: 1, offset: 1}),
        ]))
      ])
    ]),
    trigger('body', [
      transition(':enter', [
        animate('1s ease-in', keyframes([
          style({opacity: 0, offset: .0}),
          style({ opacity: 1, offset: .4}),
          style({opacity: .4, offset: .6}),
          style({opacity: 1, offset: .8}),
          style({opacity: 0, offset: .9}),
          style({opacity: 1, offset: 1}),
        ]))
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  constructor() { }

  async ngOnInit() {
  }
}
