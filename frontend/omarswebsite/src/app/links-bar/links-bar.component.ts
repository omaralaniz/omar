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
  selector: 'app-links-bar',
  templateUrl: './links-bar.component.html',
  styleUrls: ['./links-bar.component.scss'],
  animations: [
    trigger('arrowState', [
      state('hide', style({
        transform: 'rotate(0)'
      })),
      state('show',   style({
        transform: 'translateX(-100%) rotate(-180deg)'
      })),
      transition('hide => show', animate('250ms ease-out')),
      transition('show => hide', animate('250ms ease-in'))
    ]),
    trigger('infoState', [
      state('hide', style({
      })),
      state('show',   style({
        transform: 'translateX(-35%) rotate(90deg)',
      })),
      transition('hide => show', animate('250ms ease-out')),
      transition('show => hide', animate('250ms ease-in'))
    ]),
    trigger('linkState', [
      state('show', style({
        transform: "translateX(0)",
      })),
      state('hide', style({
        transform: "translateX(150%)",
      })),
      transition('hide => show', animate('250ms ease-in')),
      transition('show => hide', animate('250ms ease-out'))
    ]),
  ]
})
export class LinksBarComponent implements OnInit {
  github = "https://github.com/omaralaniz/";
  linkedin = "https://www.linkedin.com/in/omar-alaniz-971139140/";
  resume = "../../assets/Resume.pdf";

  linkedin_logo = "../../assets/linkedin-letters.svg";
  git_logo = "../../assets/github-logo.svg";
  resume_logo = "../../assets/skills.svg";

  arrow_show = "../../assets/arrow-show.svg";

  show = false;


  constructor() {
  }

  get state(){
    return this.show ? 'show' : 'hide';
  }


  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
