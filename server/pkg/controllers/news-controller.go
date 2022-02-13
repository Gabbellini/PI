package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/Gabbbellini/go-news/pkg/models"
	"github.com/Gabbbellini/go-news/pkg/utils"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func GetNews(w http.ResponseWriter, r *http.Request) {
	newNews := models.GetAllNews()
	response, _ := json.Marshal(newNews)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, err := w.Write(response)
	if err != nil {
		return
	}
}

func GetNewById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	newId := vars["id"]
	ID, err := strconv.ParseInt(newId, 0, 0)
	if err != nil {
		fmt.Println("[GET_NEW_BY_ID] ERROR WHILE PARSING")
	}
	newDetails, _ := models.GetNewById(ID)
	res, _ := json.Marshal(newDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, e := w.Write(res)
	if e != nil {
		fmt.Println("[GET_NEW_BY_ID] ERROR WHILE WRITING RESPONSE")
	}
}

func CreateNew(w http.ResponseWriter, r *http.Request) {
	CreateNew := &models.New{}
	utils.ParseBody(r, CreateNew)
	n := CreateNew.CreateNew()
	res, _ := json.Marshal(n)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, err := w.Write(res)
	if err != nil {
		fmt.Println("[CREATE_NEW] ERROR WHILE WRITING RESPONSE")
	}
}

func DeleteNew(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	newId := vars["id"]
	ID, err := strconv.ParseInt(newId, 0, 0)
	if err != nil {
		fmt.Println("[DELETE_NEW] ERROR WHILE PARSING")
	}

	deletedNew := models.DeleteNew(ID)
	res, err := json.Marshal(deletedNew)
	if err != nil {
		fmt.Println("[DELETE_NEW] ERROR WHILE MARSHAL")
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, e := w.Write(res)
	if e != nil {
		fmt.Println("[DELETE_NEW] ERROR WHILE WRITE RESPONSE")
	}
}

func UpdateNew(w http.ResponseWriter, r *http.Request) {
	var updatedNew = &models.New{}
	utils.ParseBody(r, updatedNew)
	vars := mux.Vars(r)
	newId := vars["id"]
	ID, err := strconv.ParseInt(newId, 0, 0)
	if err != nil {
		fmt.Println("[UPDATE_NEW] ERROR WHILE PARSING")
	}
	currentNew, db := models.GetNewById(ID)
	if updatedNew.Title != "" {
		currentNew.Title = updatedNew.Title
	}
	if updatedNew.Description != "" {
		currentNew.Description = updatedNew.Description
	}
	if updatedNew.Image != "" {
		currentNew.Image = updatedNew.Image
	}
	db.Save(&currentNew)
	res, _ := json.Marshal(currentNew)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, e := w.Write(res)
	if e != nil {
		fmt.Println("[UPDATE_NEW] ERROR WHILE WRITE RESPONSE")
	}
}
