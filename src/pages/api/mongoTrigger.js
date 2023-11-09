export default async function handleMongoDBChangeEvent(req, res) {
    try {
      const changeEvent = req.body;
  
      if (!changeEvent || !changeEvent.documentKey || !changeEvent.documentKey._id) {
        // If any required property is missing, respond with an error
        console.error("Invalid MongoDB event payload:", changeEvent);
        res.status(400).json({ error: "Invalid MongoDB event payload" });
        return;
      }
  
      const serviceName = "mongodb-atlas";
      const targetDatabase = "wedding-guests";
      const targetCollection = "confirmed";
  
      const collection = context.services.get(serviceName).db(targetDatabase).collection(targetCollection);
  
      if (changeEvent.operationType === "insert") {
        // Handle insert operation
        await collection.insertOne(changeEvent.fullDocument);
      }
  
      res.status(200).end();
    } catch (err) {
      console.error("Error performing MongoDB write:", err.message);
      res.status(500).end();
    }
  }
  