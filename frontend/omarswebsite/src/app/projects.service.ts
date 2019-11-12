import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IProjects {
  title: string
  team: string
  position: string
  stack: string
  description: string
  github: string
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: IProjects[] = [];


  constructor(private httpClient: HttpClient) { }

  async getProjects(){
    this.projects = await this.httpClient.get<IProjects[]>("/api/projects").toPromise();
    
    return this.projects;
  }
}
