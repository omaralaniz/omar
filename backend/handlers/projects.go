package handlers

import (
	"net/http"

	repo "github.com/omaralaniz/omar/backend/repository"
	"github.com/gin-gonic/gin"
)

func GetAll(projects *repo.Projects) gin.HandlerFunc {
	return func(c *gin.Context) {
		results := projects.GetAll()
		c.JSON(http.StatusOK, results)
	}
}
