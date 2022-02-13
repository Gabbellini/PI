package main

import (
	"github.com/Gabbbellini/go-news/pkg/routes"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	routes.RegisterNewStoreRoutes(router)
	http.Handle("/", router)
	log.Println("Server is running on port 8000")
	log.Fatal(http.ListenAndServe("localhost:8000", router))
}
