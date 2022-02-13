package main

import (
	"github.com/Gabbbellini/go-news/pkg/routes"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	routes.RegisterNewStoreRoutes(router)
	http.Handle("/", router)
	credentials := handlers.AllowCredentials()
	methods := handlers.AllowedMethods([]string{"POST"})
	origins := handlers.AllowedOrigins([]string{"http://localhost:8080"})
	log.Println("Server is running on port 8000")
	log.Fatal(http.ListenAndServe("localhost:8000", handlers.CORS(credentials, methods, origins)(router)))
}
