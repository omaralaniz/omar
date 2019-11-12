package repository

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

type Project struct {
	Title       string `json:"title"`
	Team        string `json:"team"`
	Position    string `json:"position"`
	Stack       string `json:"stack"`
	Description string `json:"description"`
	GitHub      string `json:"github"`
}

type Projects struct {
	Projects []Project `json:"projects"`
}

func New() *Projects {
	return &Projects{}
}

func (r *Projects) GetAll() []Project {
	r.unmarshalJSON()
	return r.Projects
}

func parseFile() []byte {
	fp := "projects.json"
	jsonFile, err := os.Open(fp)

	if err != nil {
		fmt.Println(err)
	}

	defer jsonFile.Close()

	bytevalue, _ := ioutil.ReadAll(jsonFile)

	return bytevalue
}

func (r *Projects) unmarshalJSON() {

	data := parseFile()

	err := json.Unmarshal(data, &r)

	if err != nil {
		fmt.Println(err)
	}
}
