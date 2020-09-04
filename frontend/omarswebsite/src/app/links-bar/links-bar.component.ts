import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
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
        transform: 'translate(-100%, -50%) rotate(-180deg)'
      })),
      transition('hide => show', animate('150ms ease-out')),
      transition('show => hide', animate('150ms ease-in'))
    ]),
    trigger('infoState', [
      state('hide', style({
      })),
      state('show',   style({
        transform: 'translateX(-35%) rotate(90deg)'
      })),
      transition('hide => show', animate('150ms ease-out')),
      transition('show => hide', animate('150ms ease-in'))
    ]),
    trigger('linkState', [
      state('show', style({
        transform: "translateX(0)",
      })),
      state('hide', style({
        transform: "translateX(170%)",
      })),
      transition('hide => show', animate('150ms ease-in')),
      transition('show => hide', animate('150ms ease-out'))
    ]),
    trigger('plusState', [
      state('hide', style({
      })),
      state('show',   style({
        transform: 'translate(30%, -135%) rotate(45deg)',
        color: "#fd5241"
      })),
      transition('hide => show', animate('150ms ease-out')),
      transition('show => hide', animate('150ms ease-in'))
    ]),
    trigger('infoMobile', [
      state('hide', style({
        transform: "rotate(90deg)",
        color: "#c5ff00"
      })),
      state('show',   style({
      })),
      transition('hide => show', animate('150ms ease-out')),
      transition('show => hide', animate('150ms ease-in'))
    ]),
    trigger('mobileState', [
      state('show', style({
        transform: "translateX(10%)",
      })),
      state('hide', style({
        transform: "translateX(190%)",
      })),
      transition('hide => show', animate('150ms ease-in')),
      transition('show => hide', animate('150ms ease-out'))
    ]),
  ]
})
export class LinksBarComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;

  github = "https://github.com/omaralaniz/";
  linkedin = "https://www.linkedin.com/in/omar-alaniz-971139140/";
  resume = "../../assets/resume.pdf";

  linkedin_logo = "../../assets/linkedin-letters.svg";
  git_logo = "../../assets/github-logo.svg";
  resume_logo = "../../assets/skills.svg";

  linkedin_mobile = "../../assets/linkedin-letters-mobile.svg";
  github_mobile = "../../assets/github-logo-mobile.svg"
  resume_mobile = "../../assets/skills-mobile.svg"


  arrow_show = "../../assets/arrow-show.svg";

  show = false;


  constructor() {
    this.getScreenSize();
  }

  get state(){
    return this.show ? 'show' : 'hide';
  }

  
  @HostListener('window:resize', ['$event'])
  getScreenSize($event?){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.getScreenSize();
  }

}
