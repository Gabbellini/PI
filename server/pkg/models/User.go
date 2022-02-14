package models

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Name     string `gorm:""json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func GetUser(credentials Credentials) (*User, *gorm.DB) {
	var getUser User
	db := db.Where("email=? AND password=?", credentials.Email, credentials.Password).Find(&getUser)
	return &getUser, db
}
