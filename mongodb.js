const { MongoClient } = require('mongodb');
const { ServerApiVersion } = require('mongodb');
const fetch = require('node-fetch');

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
      },
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

    // Add logic to send a POST request directly to Netlify build hook
    const netlifyBuildHookUrl = 'https://api.netlify.com/build_hooks/6550c6d76f8699774957cc4e';

    const response = await fetch(netlifyBuildHookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // Empty object as payload
    });

    if (!response.ok) {
      console.error('Error triggering Netlify build:', response.statusText);
      return;
    }

    console.log('Netlify build triggered successfully.');

  } catch (error) {
    console.error('Error sending data to "confirmed" collection:', error);
  }
}

export { sendToConfirmedCollection, connectToDatabase, db };

