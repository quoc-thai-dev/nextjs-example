import MeetupDetail from "@/components/meetups/MeeetupDetail";
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://quocthai0099:LJM65PhH5z7gSzUs@cluster0.kwvg82q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    console.log(meetups);
    const paths = meetups.map(meet => ({
        params: {
            meetupId: meet._id.toString(),
        }
    }))
    await client.close();
    console.log(paths);
    return {
        fallback: "blocking",
        paths: paths,
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect("mongodb+srv://quocthai0099:LJM65PhH5z7gSzUs@cluster0.kwvg82q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db('meetups');
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
    console.log(selectedMeetup);
    await client.close();
    return {
        props: {
            meetup: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
            }
        },
    }
}
function MeetupDetails({meetup}) {
    return (
        <>
            <Head>
                <title>{meetup.title}</title>
                <meta name="description" content={meetup.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MeetupDetail
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}/>
        </>

    )
}

export default MeetupDetails;
