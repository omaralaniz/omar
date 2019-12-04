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

func (r *Projects) GetAll() []entities.Project {
	if len(r.Projects.Projects) == 0 {
		database.GetDocuments(&r.Projects.Projects, "projects")
	}

	return r.Projects.Projects
}
