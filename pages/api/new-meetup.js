// api/new-meetup
import {MongoClient} from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = res.body;
        console.log(data);
        const {title, image, address, description} = data;
        const client = await MongoClient.connect("mongodb+srv://quocthai0099:LWM1ttkb2Bc2Pl7n@cluster0.kwvg82q.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();
        const meetupsCollection = await db.collection("meetups");
        const result = meetupsCollection.insertOne(data)
        console.log(result)
        client.close();
        res.status(200).json({message:"Meetup insert Successful"})
    }
}

export default handler;