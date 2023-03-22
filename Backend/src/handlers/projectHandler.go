package handlers

import (
	"PMD/controllers"

	"github.com/gin-gonic/gin"
)

func SetupProjectRoutes(engine *gin.Engine){
    r := engine.Group("/project")
    r.GET("/all",controllers.GetAllProjects)
    r.POST("/add",controllers.AddProject)
    r.POST("/remove/:project_id",controllers.RemoveProject)
    r.GET("/inactive",controllers.GetAllInactiveProjects)

}
