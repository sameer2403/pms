package controllers

import (
	"PMD/model"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type ProjectPayload struct {
	Name        string `json:"name"`
	Assignee_id int    `json:"assignee_id"`
	Status      string `json:"status"`
}

func GetAllProjects(c *gin.Context) {
	const functionName = "controllers.GetAllProjects"
	p, err := model.GetAllProjects()
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	c.JSON(http.StatusOK, p)
}
func AddProject(c *gin.Context) {
	const functionName = "controllers.AddProject"
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil && err != io.EOF {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	var dummy ProjectPayload
	err = json.Unmarshal(body, &dummy)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Failed to Unmarshal")
		return
	}

	dummy.Status = "Inactive"

	nproject := model.Project{
		Name:        dummy.Name,
		Assignee_id: dummy.Assignee_id,
		Status:      dummy.Status,
	}

	//int2, err := strconv.ParseInt(dummy.Assignee_id, 6, 12)
	id, err := model.AddProject(&nproject)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
		return
	}
	c.JSON(http.StatusOK, gin.H{"id": id})
}

func RemoveProject(c *gin.Context) {
	const functionName = "controllers.RemoveProject"
	idp := c.Param("project_id")
	id, err := strconv.Atoi(idp)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Invalid ID"})
		return
	}
	err = model.RemoveProject(id)
	if err != nil {
		c.JSON(http.StatusNotFound, "Query Error")
		return
	}
	c.JSON(http.StatusOK, gin.H{"msg": "Removed Successfully"})

}

func GetAllInactiveProjects(c *gin.Context) {
	p, err := model.GetAllProjects("Inactive")
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"msg": "Error Getting Active Projects"})
		return
	}
	c.JSON(http.StatusOK, p)
}
