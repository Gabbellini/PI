package controllers

import (
	"encoding/json"
	"github.com/Gabbbellini/go-news/pkg/models"
	"github.com/Gabbbellini/go-news/pkg/utils"
	"log"
	"net/http"
)

func GetUser(w http.ResponseWriter, r *http.Request) {
	var User = &models.User{}
	utils.ParseBody(r, User)

	var credentials = models.Credentials{
		Email:    User.Email,
		Password: User.Password,
	}

	user, _ := models.GetUser(credentials)
	w.Header().Set("Content-Type", "application/json")

	if user.Email == User.Email && user.Password == User.Password {
		res, err := json.Marshal(user)
		if err != nil {
			log.Println("[GET_USER] ERROR WHILE MARSHAL")
		}
		w.WriteHeader(http.StatusOK)
		w.Write(res)
	} else {
		res, _ := json.Marshal("Email e/ou senha inválidos")
		w.WriteHeader(http.StatusForbidden)
		w.Write(res)
	}
}
