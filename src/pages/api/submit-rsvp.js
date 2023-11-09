import { sendToConfirmedCollection } from "../../../mongodb";


export default async function handler(req, res) {
    if (req.method === "POST") {
      const formData = req.body;
  
      try {
        await sendToConfirmedCollection(formData);
        await fetch('https://peaceful-mochi-06dba0.netlify.app/api/mongodb-webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        res.status(201).end();
      } catch (error) {
        console.error("Error submitting RSVP:", error);
        res.status(500).end();
      }
    } else {
      res.status(405).end();
    }
  }


  