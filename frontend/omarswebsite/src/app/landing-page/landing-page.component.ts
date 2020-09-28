import { Component, OnInit, HostListener} from '@angular/core';
import { ProjectsService } from '../projects.service';
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
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;

  constructor(private projectsService: ProjectsService) { 
    this.getScreenSize;
    this.getProjects();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize($event?){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  async getProjects(){
    await this.projectsService.getProjects();
  }

  async ngOnInit() {
    this.getScreenSize();
  }
}
