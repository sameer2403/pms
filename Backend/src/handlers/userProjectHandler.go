package handlers

import (
	"PMD/controllers"

	"github.com/gin-gonic/gin"
)

func SetupUserprojectRoutes(engine *gin.Engine) {

	p := engine.Group("/project")
	p.GET("userp/:user_id", controllers.GetProjectsOfUserID)

	r := engine.Group("/assign")
	r.POST("/project", controllers.AssignProjectByID)

}
