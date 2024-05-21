import {
  APITimelineItem,
  parse,
  TimelineItem,
} from "@/entities/timelineItem/timelineItem";

const timelineItems: APITimelineItem[] = [
  {
    title: "Get to the airport",
    description:
      " Ticket, passport, and luggage. Don't forget to pack your toothbrush!",
    time: "08:00",
    date: "2022-01-01",
  },
  {
    title: "Flight to Paris",
    time: "10:00",
    date: "2022-01-01",
  },
  {
    title: "Arrive in Paris",
    time: "12:00",
    date: "2022-01-01",
  },
  {
    title: "Visit the Eiffel Tower",
    time: "14:00",
    date: "2022-01-01",
  },
  {
    title: "Dinner at a fancy restaurant",
    description: "Try the escargot!",
    time: "20:00",
    date: "2022-01-01",
  },
  {
    title: "Flight to Berlin",
    time: "10:00",
    date: "2022-01-02",
  },
  {
    title: "Arrive in Berlin",
    time: "12:00",
    date: "2022-01-02",
  },
  {
    title: "Visit the Brandenburg Gate",
    time: "14:00",
    date: "2022-01-02",
  },
  {
    title: "Dinner at a local pub",
    time: "20:00",
    date: "2022-01-02",
  },
  {
    title: "Flight to Rome",
    time: "10:00",
    date: "2022-01-03",
  },
  {
    title: "Arrive in Rome",
    time: "12:00",
    date: "2022-01-03",
  },
  {
    title: "Visit the Colosseum",
    time: "14:00",
    date: "2022-01-03",
  },
  {
    title: "Dinner at a pizzeria",
    time: "20:00",
    date: "2022-01-03",
  },
  {
    title: "Flight back home",
    time: "10:00",
    date: "2022-01-04",
  },
  {
    title: "Arrive back home",
    time: "12:00",
    date: "2022-01-04",
  },
];

// TODO: get real items data from db
export async function GET() {
  const data: TimelineItem[] = timelineItems.map(parse);

  // if (response.ok) {
  //   data = await response.json();
  // }

  return Response.json({ data });
}
