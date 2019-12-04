package main

import (
	"./handlers"
	"./repository"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	projects := repository.New()

	api := r.Group("/api")
	api.GET("/ping", handlers.Ping())
	api.GET("/projects", handlers.GetAll(projects))

	err := r.Run("0.0.0.0:8080")

	if err != nil {
		panic(err)
	}

}
