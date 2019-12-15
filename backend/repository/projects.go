package repository

import (
	"github.com/omaralaniz/omar/database"
	"github.com/omaralaniz/omar/entities"
)

type Projects struct {
	Pointer entities.Projects
}

func New() *Projects {
	return &Projects{}
}

func (r *Projects) GetAll() []entities.Project {
	if len(r.Pointer.Projects) == 0 {
		database.GetDocuments(&r.Pointer.Projects, "projects")
	}

	return r.Pointer.Projects
}
