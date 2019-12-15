package repository

import (
	"github.com/omaralaniz/omar/database"
	"github.com/omaralaniz/omar/entities"
)

type Projects struct {
	PointerTo entities.Projects
}

func New() *Projects {
	return &Projects{}
}

func (r *Projects) GetAll() []entities.Project {
	if len(r.PointerTo.Projects) == 0 {
		database.GetDocuments(&r.PointerTo.Projects, "projects")
	}

	return r.PointerTo.Projects
}
