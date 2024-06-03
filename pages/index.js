import Head from "next/head";
import { Inter } from "next/font/google";
import MeetupList from "@/components/meetups/MeetupList";
import {MongoClient} from "mongodb";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Meetup Page</title>
        <meta name="description" content="Page Meetup Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MeetupList meetups={props.meetups} />
    </>
  );
}
export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://quocthai0099:LJM65PhH5z7gSzUs@cluster0.kwvg82q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");
    const meetups= await meetupsCollection.find().toArray();
    await client.close();
    return {
        props: {
            meetups:meetups.map(meet=>({
                title:meet.title,
                image:meet.image,
                description:meet.description,
                address:meet.address,
                id:meet._id.toString()
            })),
            revalidate: 5,
        },
    }
}
