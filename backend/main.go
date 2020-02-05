package main

import (
	"github.com/gin-gonic/gin"
	handler "github.com/omaralaniz/omar/backend/handlers"
	repo "github.com/omaralaniz/omar/backend/repository"
)

func main() {
	router := gin.Default()
	projects := repo.New()

	api := router.Group("/api")
	api.GET("/ping", handler.Ping())
	api.GET("/projects", handler.GetAll(projects))

	err := router.Run("0.0.0.0:8080")

	if err != nil {
		panic(err)
	}

}
