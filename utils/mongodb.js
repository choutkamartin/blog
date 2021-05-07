import { parse } from "url";
import { MongoClient } from "mongodb";

let cachedDb = null;
export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  });

  const db = client.db(parse(process.env.MONGODB_URI).pathname.substr(1));

  cachedDb = db;
  return db;
}
