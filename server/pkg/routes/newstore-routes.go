package routes

import (
	"github.com/Gabbbellini/go-news/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterNewStoreRoutes = func(router *mux.Router) {
	router.HandleFunc("/create/news", controllers.CreateNew).Methods("POST")
	router.HandleFunc("/list/news", controllers.GetNews).Methods("GET")
	router.HandleFunc("/get/news/id/{id}", controllers.GetNewById).Methods("GET")
	router.HandleFunc("/update/news/id/{id}", controllers.UpdateNew).Methods("PUT")
	router.HandleFunc("/delete/news/id/{id}", controllers.DeleteNew).Methods("DELETE")
	router.HandleFunc("/login", controllers.GetUser).Methods("POST")
}
