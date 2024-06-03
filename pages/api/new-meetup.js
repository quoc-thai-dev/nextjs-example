// api/new-meetup
import {MongoClient} from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // const {title, image, address, description} = data;
        const client = await MongoClient.connect("mongodb+srv://quocthai0099:LJM65PhH5z7gSzUs@cluster0.kwvg82q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db("meetups");
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data)
        await client.close();
        res.status(200).json({message:"Meetup Insert Successful"})
    }
}

export default handler;