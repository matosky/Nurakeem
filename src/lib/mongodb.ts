import { MongoClient } from "mongodb";

const uri = "";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const globalWithMongoClientPromise = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

if (process.env.NODE_ENV === "development") {
  // In development mode, reuse the existing MongoClient to avoid multiple connections
  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri!, options);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
  // In production, create a new MongoClient each time
  client = new MongoClient(uri!, options);
  clientPromise = client.connect();
}

export default clientPromise;
