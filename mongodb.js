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
  

  db = client.db("wedding-guests"); 
}
async function sendToConfirmedCollection(data) {
  try {
    if (!db) {
      await connectToDatabase();
    }

    const collection = db.collection('confirmed');

    // Insert the data into the "confirmed" collection
    const result = await collection.insertOne(data);
    console.log(`Data sent to "confirmed" collection: ${result.insertedId}`);
  } catch (error) {
    console.error('Error sending data to "confirmed" collection:', error);
  }
}


export { sendToConfirmedCollection, connectToDatabase, db };
