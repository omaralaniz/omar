package main

import (
	"context"
	"fmt"
	"net/url"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	DB "github.com/omaralaniz/omar/backend/database"
	handler "github.com/omaralaniz/omar/backend/handlers"
	repo "github.com/omaralaniz/omar/backend/repository"
	cors "github.com/rs/cors/wrapper/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func initDB() {
	err := godotenv.Load()

	db := os.Getenv("db")
	password := os.Getenv("db_pass")
	dbAddress := os.Getenv("db_address")

	encodedPass := url.QueryEscape(password)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	DB.Conn, err = mongo.Connect(ctx, options.Client().ApplyURI(
		"mongodb+srv://"+db+":"+encodedPass+"@"+dbAddress+"/test?w=majority",
	))
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Database connection succeeded")
}

func main() {
	router := gin.Default()
	projects := repo.New()
	initDB()

	defer DB.Conn.Disconnect(context.Background())

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"https://www.omaralaniz.com", "https://omaralaniz.com", "http://localhost:4200"},
		AllowedMethods:   []string{"GET"},
		AllowCredentials: true,
	})

	router.Use(c)

	api := router.Group("/api")
	api.GET("/ping", handler.Ping())
	api.GET("/projects", handler.GetAll(projects))

	err := router.Run()

	if err != nil {
		panic(err)
	}

}
