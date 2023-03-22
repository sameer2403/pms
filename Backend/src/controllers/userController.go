package controllers

import (
	"PMD/model"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type UserProjectPayload struct {
	User_id    int `orm:"column(user_id);auto;pk" json:"user_id"`
	Project_id int `orm:"column(user_id);auto;pk" json:"project_id"`
}

type UserPayload struct {
	Name     string `json:"username"`
	Email    string `json:"email"`
	Role     string `json:"role"`
	Status   string `json:"status"`
	Password string `json:"password"`
}

var auth struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Login(c *gin.Context) {

	if err := c.ShouldBindJSON(&auth); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	u, err := model.GetUserByCred(auth.Username, auth.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"message": "Invalid username or password!",
		})
		return
	}

	fmt.Println(u, "heyy")
	if u.User_id > 0 {
		c.JSON(http.StatusOK, gin.H{
			"message":  "Welcome user!",
			"userId":   u.User_id,
			"userName": u.Username,
		})

	}

}

func GetAllUsers(c *gin.Context) {
	const functionName = "controllers.GetAllUsers"
	u, err := model.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	c.JSON(http.StatusOK, u)
}

func DeleteUser(c *gin.Context) {
	const functionName = "controllers.DeleteUser"
	idp := c.Param("user_id")
	id, err := strconv.Atoi(idp)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Invalid ID"})
		return
	}
	err = model.DeleteUser(id)
	if err != nil {
		c.JSON(http.StatusNotFound, "Query Error")
		return
	}
	c.JSON(http.StatusOK, gin.H{"msg": "Deleted Successfully"})

}

func Adduser(c *gin.Context) {
	const funnctionName = "controllers.Adduser"
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil && err != io.EOF {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	var dummy UserPayload
	err = json.Unmarshal(body, &dummy)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Failed to Unmarshal")
		return
	}
	var nuser model.User
	if dummy.Status == "" {
		dummy.Status = "Active"
	}
	nuser = model.User{
		Username: dummy.Name,
		Email:    dummy.Email,
		Role:     dummy.Role,
		Status:   dummy.Status,
		Password: dummy.Password,
	}
	id, err := model.AddUser(&nuser)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Failed to Add")
		return
	}
	c.JSON(http.StatusOK, gin.H{"id": id})
}

func UpdateUserRole(c *gin.Context) {

	const functionName = "controllers.UpdateRole"
	idp := c.Param("user_id")
	id, err := strconv.Atoi(idp)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Invalid ID"})
		return
	}
	err = model.UpdateRole(id)
	if err != nil {
		c.JSON(http.StatusNotFound, "Query Error")
		return
	}
	c.JSON(http.StatusOK, gin.H{"msg": "Updated Successfully"})

}

func GetUserById(c *gin.Context) {
	const functionName = "controllers.GetUserById"
	idp := c.Param("user_id")
	id, err := strconv.Atoi(idp)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Invalid ID"})
		return
	}
	u, err := model.GetDetailsOfUserID(id)
	if err != nil {
		c.JSON(http.StatusNotFound, "Query Error")
		return
	}
	c.JSON(http.StatusOK, u)
}

func DeleteProjectByIdController(c *gin.Context) {

	const functionName = "controllers.deleteProjectByIdController"

	fmt.Println("aniket")
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": "Invalid Body"})
		return
	}

	fmt.Println(body, "heyy boy")
	var dummy1 UserProjectPayload
	err = json.Unmarshal(body, &dummy1)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": "Failed to Unmarshal"})
		return
	}

	fmt.Println(dummy1.Project_id, dummy1.User_id, "aniket kumar")

	err1 := model.DeleteProjectById(dummy1.Project_id, dummy1.User_id)

	if err1 != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": "Failed to Assign"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"Success": gin.H{"success": "Project deleted successfully"}})

}
