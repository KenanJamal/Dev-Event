export type Event = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: Event[] = [
    {
        image: "/images/event1.png",
        title: "React Summit",
        slug: "react-summit",
        location: "Amsterdam, Netherlands",
        date: "June 12, 2026",
        time: "09:00 AM CEST",
    },
    {
        image: "/images/event2.png",
        title: "GitHub Universe",
        slug: "github-universe",
        location: "San Francisco, CA, USA",
        date: "October 28, 2026",
        time: "09:30 AM PDT",
    },
    {
        image: "/images/event3.png",
        title: "Google I/O Extended",
        slug: "google-io-extended",
        location: "Online + Local Meetups",
        date: "May 19, 2026",
        time: "10:00 AM PDT",
    },
    {
        image: "/images/event4.png",
        title: "Next.js Conf",
        slug: "nextjs-conf",
        location: "San Francisco, CA, USA",
        date: "October 23, 2026",
        time: "10:00 AM PDT",
    },
    {
        image: "/images/event5.png",
        title: "HackMIT",
        slug: "hackmit",
        location: "Cambridge, MA, USA",
        date: "September 19, 2026",
        time: "08:00 PM EDT",
    },
    {
        image: "/images/event6.png",
        title: "KubeCon + CloudNativeCon Europe",
        slug: "kubecon-europe",
        location: "Amsterdam, Netherlands",
        date: "March 23, 2026",
        time: "09:00 AM CET",
    },
];