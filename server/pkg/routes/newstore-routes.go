package routes

import (
	"github.com/Gabbbellini/go-news/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterNewStoreRoutes = func(router *mux.Router) {
	router.HandleFunc("/create/new", controllers.CreateNew).Methods("POST")
	router.HandleFunc("/get/news", controllers.GetNews).Methods("GET")
	router.HandleFunc("/get/new/id/{id}", controllers.GetNewById).Methods("GET")
	router.HandleFunc("/update/new/id/{id}", controllers.UpdateNew).Methods("PUT")
	router.HandleFunc("/delete/new/id/{id}", controllers.DeleteNew).Methods("DELETE")
}
