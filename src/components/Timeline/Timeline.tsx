import TimelineItem from "@/components/Timeline/TimelineItem/TimelineItem";
import styles from "./Timeline.module.scss";

type TimelineItem = {
  title: string;
  description?: string;
};

export default function Timeline() {
  const timelineItems: TimelineItem[] = [
    {
      title: "Get to the airport",
      description:
        " Ticket, passport, and luggage. Don't forget to pack your toothbrush!",
    },
    {
      title: "Get on the plane",
    },
    {
      title: "Arrive at destination",
    },
    {
      title: "Get to the hotel",
      description:
        "Check in, unpack, and relax. You've earned it after that long flight!",
    },
    {
      title: "Explore the city",
    },
    {
      title: "Get to the airport",
      description:
        " Ticket, passport, and luggage. Don't forget to pack your toothbrush!",
    },
    {
      title: "Get on the plane",
    },
    {
      title: "Arrive at destination",
    },
    {
      title: "Get to the hotel",
      description:
        "Check in, unpack, and relax. You've earned it after that long flight!",
    },
    {
      title: "Explore the city",
    },
  ];
  return (
    <div className={styles["timeline"]}>
      <h1>Timeline</h1>
      <ul>
        {timelineItems.map((item, index) => (
          <li key={index}>
            <TimelineItem title={item.title} description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}
