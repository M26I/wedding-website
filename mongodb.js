const { MongoClient } = require('mongodb');
const { ServerApiVersion } = require('mongodb');

let client;
let db;

async function connectToDatabase() {
  if (!client) {
    // Replace the following with your actual MongoDB URI
    const uri = process.env.MONGODB_URI;
    
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
  }

  db = client.db("wedding-guests"); // Replace with your actual database name
}

export { connectToDatabase, db };
