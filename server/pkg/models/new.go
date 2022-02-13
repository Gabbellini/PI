package models

import (
	"github.com/Gabbbellini/go-news/pkg/config"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

type New struct {
	gorm.Model
	Title       string `gorm:""json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&New{})
}

func (b *New) CreateNew() *New {
	db.NewRecord(b)
	db.Create(&b)
	return b
}

func GetAllNews() []New {
	var News []New
	db.Find(&News)
	return News
}

func GetNewById(ID int64) (*New, *gorm.DB) {
	var getNew New
	db := db.Where("ID=?", ID).Find(&getNew)
	return &getNew, db
}

func DeleteNew(ID int64) New {
	var new New
	db.Where("ID=?", ID).Delete(new)
	return new
}
