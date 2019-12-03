package database

import (
	"context"
	"fmt"
	"log"
	"net/url"
	"os"
	"reflect"
	"time"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Connect() *mongo.Client {

	err := godotenv.Load()

	if err != nil {
		fmt.Print(err)
	}

	db := os.Getenv("db")
	password := os.Getenv("db_pass")
	dbAddress := os.Getenv("db_address")

	encodedPass := url.QueryEscape(password)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(
		"mongodb+srv://"+db+":"+encodedPass+"@"+dbAddress+"/test?w=majority",
	))
	if err != nil {
		fmt.Println(err)
	}

	return client
}

func GetDocuments(documents interface{}, collectionName string) interface{} {
	createQuery(documents, collectionName)
	return documents
}

func createQuery(document interface{}, collectionName string) {
	client := Connect()
	err := godotenv.Load()

	documentsV := reflect.ValueOf(document).Elem()
	documentT := documentsV.Type().Elem()

	if err != nil {
		fmt.Print(err)
	}

	database := os.Getenv("db_name")
	collection := client.Database(database).Collection(collectionName)

	cur, err := collection.Find(context.Background(), bson.D{{}})

	if err != nil {
		log.Fatal(err)
	}

	defer cur.Close(context.Background())
	for cur.Next(context.Background()) {
		documentvPtr := reflect.New(documentT)
		err = cur.Decode(documentvPtr.Interface())
		if err != nil {
			log.Fatal(err)
		}
		documentsV.Set(reflect.Append(documentsV, documentvPtr.Elem()))
	}
	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
}
