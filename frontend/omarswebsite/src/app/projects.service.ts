import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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

  env = environment.url;
  public projects: IProjects[] = [];


  constructor(private httpClient: HttpClient) { }

  async getProjects(){
    this.projects = await this.httpClient.get<IProjects[]>(this.env).toPromise();
    
    return this.projects;
  }
}
