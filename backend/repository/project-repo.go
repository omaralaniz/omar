package repository

import (
	"../database"
	"../entities"
)

type Projects struct {
	Projects entities.Projects
}

func New() *Projects {
	return &Projects{}
}

func (r *Projects) GetProjects() []entities.Project {
	database.GetDocuments(&r.Projects.Projects, "projects")
	return r.Projects.Projects
}
