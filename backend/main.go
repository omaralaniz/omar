package main

import (
	"github.com/gin-gonic/gin"
	handler "github.com/omaralaniz/omar/backend/handlers"
	repo "github.com/omaralaniz/omar/backend/repository"
	cors "github.com/rs/cors/wrapper/gin"
)

func main() {
	router := gin.Default()
	projects := repo.New()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"https://www.omaralaniz.com", "https://omaralaniz.com", "http://localhost:4200"},
		AllowedMethods:   []string{"GET"},
		AllowCredentials: true,
	})

	router.Use(c)

	api := router.Group("/api")
	api.GET("/ping", handler.Ping())
	api.GET("/projects", handler.GetAll(projects))

	err := router.Run()

	if err != nil {
		panic(err)
	}

}
