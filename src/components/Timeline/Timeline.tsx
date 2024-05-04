import TimelineItem from "@/components/Timeline/TimelineItem/TimelineItem";
import styles from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <div className={styles["timeline"]}>
      <h1>Timeline</h1>
      <div>
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </div>
    </div>
  );
}
