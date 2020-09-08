package database

import (
	"context"
	"fmt"
	"log"
	"os"
	"reflect"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

//Pointer to our database connection
var Conn *mongo.Client

func GetDocuments(documents interface{}, collectionName string) interface{} {
	createQuery(documents, collectionName)
	return documents
}

func createQuery(document interface{}, collectionName string) {
	client := Conn
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
