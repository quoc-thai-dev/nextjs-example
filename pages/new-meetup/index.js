import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import {useRouter} from "next/navigation";
import Head from "next/head";

function NewMeetupPage(){
    const router=useRouter();
    async function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers:{
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        router.push('/')
    }
    return <>
        <Head>
            <title>New Meetup Page</title>
            <meta name="description" content="New Page Meetup Description" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </>
}
export default NewMeetupPage;