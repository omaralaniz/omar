package main

import (
	handler "github.com/omaralaniz/omar/handlers"
	repo "github.com/omaralaniz/omar/repository"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	projects := repo.New()

	api := r.Group("/api")
	api.GET("/ping", handler.Ping())
	api.GET("/projects", handler.GetAll(projects))

	err := r.Run("0.0.0.0:8080")

	if err != nil {
		panic(err)
	}

}
