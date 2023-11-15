import { connectToDatabase, db } from '../../../mongodb';
import sharp from 'sharp';
import multiparty from 'multiparty';

export const config = {
    api: {
        bodyParser: false,
    },
};



export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectToDatabase();

            const collection = db.collection('images');

            const form = new multiparty.Form();

            const parseForm = () => {
                return new Promise((resolve, reject) => {
                    form.parse(req, (err, fields, files) => {
                        if (err) {
                            console.error('Error parsing form:', err);
                            reject({ status: 500, error: 'Internal Server Error' });
                            return;
                        }

                        const file = files.image ? files.image[0] : null;

                        if (!file) {

                            resolve(null);
                            return;
                        }

                        resolve(file);
                    });
                });
            };

            const file = await parseForm();


            if (file) {
                const MAX_FILE_SIZE_MB = 4;
                let buffer = await sharp(file.path)
                    .resize({ width: 800, height: 600 })
                    .jpeg({ quality: 80 })
                    .toBuffer();

                let quality = 80;
                let fileSizeMB = buffer.length / (1024 * 1024);

                while (fileSizeMB > MAX_FILE_SIZE_MB && quality > 10) {
                    quality -= 5;
                    buffer = await sharp(file.path)
                        .resize({ width: 800, height: 600 })
                        .jpeg({ quality })
                        .toBuffer();

                    fileSizeMB = buffer.length / (1024 * 1024);
                }

                const imageData = {
                    image: buffer.toString('base64'),
                };

                // Insert the data into the "images" collection
                const result = await collection.insertOne(imageData);
                console.log(`Data sent to "images" collection: ${result.insertedId}`);

                // Send a response to the client
                res.status(200).json({ message: 'Image uploaded successfully' });
            } else {
                // No image provided, send a response
                res.status(400).json({ error: 'Image file is missing.' });
            }
        } catch (error) {
            console.error('Error processing or uploading image:', error);
            res.status(error.status || 500).json({ error: error.error || 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
