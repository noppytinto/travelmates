import styles from "./Timeline.module.scss";
import { TimelineItem } from "@/entities/timelineItem/timelineItem";
import TimelineItemComponent from "./TimelineItem/TimelineItem";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button/Button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Timeline() {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);

  useEffect(() => {
    getTimelineItems().then(setTimelineItems);
  }, []);

  return (
    <div className={styles.timeline}>
      <h1>Timeline</h1>

      <div className="relative">
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

      <Button className={styles.addButton}>
        <FontAwesomeIcon icon={faAdd} size={"lg"} />
      </Button>
    </div>
  );
}

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
