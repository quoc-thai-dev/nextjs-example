import MeetupDetail from "@/components/meetups/MeeetupDetail";

function MeetupDetails({data}) {
    return (
        <MeetupDetail
            image={data.image}
            title={data.title}
            address={data.address}
            description={data.description}/>
    )
}

export default MeetupDetails;

export async function getStaticPaths() {
    return {
        fallback: false,
        paths:[
            {
                params:{
                    meetupId:'1',
                },
            },
            {
                params:{
                    meetupId:'2',
                }
            }
        ]
    }
}
export async function getStaticProps(context) {
    console.log(context.params.meetupId);
    return {
        props:{
            data:{
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Startrails_above_Gunung_Bromo_-_Indonesia.jpg/2560px-Startrails_above_Gunung_Bromo_-_Indonesia.jpg",
                title:"First Meetup",
                address:"Some Street 5, Some City",
                description:"This is a first meetup",
            }
        }
    }
}