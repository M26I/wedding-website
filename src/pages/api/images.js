
import { connectToDatabase, db } from "../../../mongodb";


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();

      const collection = db.collection('images');
      const page = parseInt(req.query.page) || 1;
      const pageSize = 10; 

      // Skip documents based on the requested page
      const images = await collection.find().skip((page - 1) * pageSize).limit(pageSize).toArray();

      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

