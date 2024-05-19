import styles from "./Timeline.module.scss";
import { TimelineItem } from "@/entities/timelineItem/timelineItem";
import TimelineItemComponent from "./TimelineItem/TimelineItem";
import { useEffect, useState } from "react";

async function getTimelineItems(): Promise<TimelineItem[]> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/timeline-items",
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();
  return data;
}

export default function Timeline() {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);

  useEffect(() => {
    getTimelineItems().then(setTimelineItems);
  }, []);

  return (
    <div className={styles["timeline"]}>
      <h1>Timeline</h1>
      <ul>
        {timelineItems.map((item, index) => (
          <li key={index}>
            <TimelineItemComponent
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
