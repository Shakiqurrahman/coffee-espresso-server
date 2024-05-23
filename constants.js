import { MongoClient, ServerApiVersion } from "mongodb";

export const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coffee-server.tnjjcr0.mongodb.net/?retryWrites=true&w=majority&appName=coffee-server`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const coffeeCollection = client.db("coffeeDB").collection("coffee");

