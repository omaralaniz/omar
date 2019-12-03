package entities

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
