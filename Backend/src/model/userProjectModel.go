package model

import (
	"fmt"

	"github.com/beego/beego/orm"
)

type UserProject struct {
	User_id    int `json:"user_id"`
	Project_id int `json:"project_id"`
	// Status     string `json:"status"`
}

// func AssignProjectByID(up UserProject) (id int64, err error) {
// 	o := orm.NewOrm()
// 	u := User{User_id: up.User_id}
// 	m2m := o.QueryM2M(&u, "Projects")
// 	var p Project
// 	_, err = o.QueryTable(new(Project)).Filter("project_id", p.Project_id).All(&p)
// 	id, err = m2m.Add(p)
// 	if err != nil {
// 		return id, err
// 	}

// 	err1 := ChangeStatusForAssign(int(up.Project_id))

// 	if err1 != nil {

// 		fmt.Println(err1)
// 	}

// 	return id,err

// 	fmt.Println("hiii", up.Project_id, up)

// 	//_, err = o.QueryTable(new(User)).Filter("user_id", up.User_id).Update(orm.Params{"status": "Active"})

// 	_, err1 := o.QueryTable(new(Project)).Filter("project_id", up.Project_id).Update(orm.Params{"status": "Active"})

// 	fmt.Println(err1)

// 	return id, err
// }

func AssignProjectByID(up UserProject) (id int64, err error) {
	o := orm.NewOrm()
	u := User{User_id: up.User_id}
	m2m := o.QueryM2M(&u, "Projects")
	var p Project
	_, err = o.QueryTable(new(Project)).Filter("project_id", up.Project_id).All(&p)
	id, err = m2m.Add(p)
	if err != nil {
		return id, err
	}

	_, err2 := o.QueryTable(new(User)).Filter("user_id", up.User_id).Update(orm.Params{"status": "Active"})

	fmt.Println(err2)

	err1 := ChangeStatusForAssign(int(up.Project_id))
	if err1 != nil {
		fmt.Println(err1)
	}
	return id, err
}

func GetProjectsByUserID(uid int) (p []Project, err error) {
	o := orm.NewOrm()
	_, err = o.QueryTable(new(Project)).RelatedSel().Filter("Users__User__user_id", uid).All(&p)
	return
}
func IsUserAssignedToProject(u UserProject) bool {
	o := orm.NewOrm()
	return o.QueryTable(new(User)).RelatedSel().Filter("user_id", u.User_id).Filter("Projects__Project__Project_id", u.Project_id).Exist()
}

func DeleteProjectById(userid int, projectid int) error {

	o := orm.NewOrm()

	_, err := o.QueryTable(new(Project)).Filter("project_id", projectid).Update(orm.Params{"status": "Inactive"})

	// _, err2 := o.QueryTable(new(UserProject)).Filter("user_id", userid).Filter("project_id", projectid).Delete()

	// if err2 != nil {
	// 	return err2
	// }

	p1, err1 := GetProjectsByUserID(userid)

	if err1 != nil {
		return err1
	}

	length := len(p1)

	if length > 1 {

	} else {

		_, err := o.QueryTable(new(User)).Filter("user_id", userid).Update(orm.Params{"status": "Inactive"})

		if err != nil {
			return err
		}
	}

	return err
}
