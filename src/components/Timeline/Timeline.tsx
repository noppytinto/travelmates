import TimelineItem from "@/components/Timeline/TimelineItem/TimelineItem";
import styles from "./Timeline.module.scss";

type TimelineItem = {
  title: string;
  description: string;
};

export default function Timeline() {
  const timelineItems: TimelineItem[] = [
    {
      title: "Get to the airport",
      description:
        " lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc" +
        " consectetur adipiscing elit. Donec nec odio vitae nunc consectetur " +
        "adipiscing elit. Donec nec odio vitae nunc consectetur adipiscing elit. Donec nec odio vitae nunc",
    },
    {
      title: "Get on the plane",
      description:
        " lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc" +
        " consectetur adipiscing elit. Donec nec odio vitae nunc consectetur " +
        "adipiscing elit. Donec nec odio vitae nunc consectetur adipiscing elit. Donec nec odio vitae nunc",
    },
    {
      title: "Arrive at destination",
      description:
        " lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc" +
        " consectetur adipiscing elit. Donec nec odio vitae nunc consectetur " +
        "adipiscing elit. Donec nec odio vitae nunc consectetur adipiscing elit. Donec nec odio vitae nunc",
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
