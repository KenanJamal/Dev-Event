import Link from "next/link";
import Image from "next/image";
import type { Event } from "@/lib/constance";

const EventCard = ({ title, image, slug, location, date, time }: Event) => {
    return (
        <Link href={`/events/${slug}`} className="flex flex-col gap-3">
            <Image
                src={image}
                alt={title}
                width={410}
                height={300}
                className="h-[300px] w-full rounded-lg object-cover"
            />
            <div className="flex flex-row items-center gap-2">
                <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
                <p className="text-light-200 text-sm font-light">{location}</p>
            </div>
            <p className="text-[20px] font-semibold line-clamp-1">{title}</p>
            <div className="text-light-200 flex flex-row flex-wrap items-center gap-4">
                <div className="flex flex-row items-center gap-2">
                    <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
                    <p className="text-sm font-light">{date}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
                    <p className="text-sm font-light">{time}</p>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;