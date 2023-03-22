package model

import (
	"fmt"

	"github.com/beego/beego/orm"
)

type User struct {
	User_id  int        `orm:"column(user_id);auto;pk" json:"user_id"`
	Username string     `orm:"column(username)" json:"userName"`
	Email    string     `orm:"column(email)" json:"email"`
	Role     string     `orm:"column(role)" json:"role"`
	Status   string     `orm:"column(status)" json:"status"`
	Password string     `orm:"column(password)" json:"password"`
	Projects []*Project `orm:"rel(m2m)"`
}

func init() {
	orm.RegisterModel(new(User))
}

func (u *User) TableName() string {
	return "user"
}
func AddUser(u *User) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(u)
	return
}

func GetAllUsers() (u []User, err error) {
	o := orm.NewOrm()
	_, err = o.QueryTable(new(User)).RelatedSel().All(&u)
	if err != nil {
		return nil, err
	}
	return u, nil
}

func GetUserByCred(username1 string, password1 string) (u User, err error) {

	o := orm.NewOrm()

	err = o.QueryTable(new(User)).Filter("username", username1).Filter("password", password1).One(&u)
	if err != nil {
		fmt.Println("err : ", err)
	}
	return u, err

}
func DeleteUser(id int) error {
	o := orm.NewOrm()
	p1, err1 := GetProjectsByUserID(id)
	fmt.Println(err1)
	for _, val := range p1 {
		_, err2 := o.QueryTable(new(Project)).Filter("project_id", val.Project_id).Update(orm.Params{"status": "Inactive"})

		if err2 != nil {
			fmt.Println(err2)
		}

	}
	// _, err3 := o.QueryTable(new(UserProject)).Filter("user_id", id).Update(orm.Params{"status": "Inactive"})
	// if err3 != nil {
	// 	fmt.Println(err3)
	// }
	_, err := o.QueryTable(new(User)).Filter("user_id", id).Update(orm.Params{"status": "Inactive"})
	return err
}

func GetDetailsOfUserID(id int) (u User, err error) {
	o := orm.NewOrm()

	err1 := o.QueryTable(new(User)).Filter("user_id", id).One(&u)
	fmt.Println(err1)
	return u, err1

}

func UpdateRole(id int) error {

	o := orm.NewOrm()

	_, err := o.QueryTable(new(User)).Filter("user_id", id).Update(orm.Params{"role": "Admin"})

	return err
}
