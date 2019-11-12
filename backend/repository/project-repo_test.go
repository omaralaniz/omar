package repository

import "testing"

func TestAdd(t *testing.T) {
	projects := New()
	projects.Add(Project{"title", "0", "it is a project", "com"})

	if len(projects.Projects) != 1 {
		t.Error("Project was not added")
	}
}

func TestGetAll(t *testing.T) {
	projects := New()
	result := projects.GetAll()

	if len(result) != 1 {
		t.Error("Project was not added")
	}
}
