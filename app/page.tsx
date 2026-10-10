import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {events} from "@/lib/constance";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">
                The Hub For Every Dev <br />
                Event You Can&#39;t Miss
            </h1>
            <p className="text-center mt-5">
                Hackathon, Meetups and Conferences, All in one place
            </p>

            <ExploreBtn />

            <div id="events" className="mt-20 space-y-7 scroll-mt-20">
                <h3>Featured Events</h3>
                <ul className="events">
                    {events.map(({image , title , slug , location , date , time}) => (
                        <li key={title}>
                            <EventCard key={title} title={title} image={image} slug={slug} location={location} date={date} time={time} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Page;