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
];

export async function GET() {
  const data: TimelineItem[] = timelineItems.map(parse);

  // if (response.ok) {
  //   data = await response.json();
  // }

  return Response.json({ data });
}
