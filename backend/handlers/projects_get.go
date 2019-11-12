package handlers

import (
	"net/http"

	"../repository"
	"github.com/gin-gonic/gin"
)

func ProjectsGetAll(projects *repository.Projects) gin.HandlerFunc {
	return func(c *gin.Context) {
		results := projects.GetAll()
		c.JSON(http.StatusOK, results)
	}
}