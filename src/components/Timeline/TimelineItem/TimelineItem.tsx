"use client";

import { useState, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFileLines } from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/ui/Card/Card";
import styles from "./TimelineItem.module.scss";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";

type Props = {
  title: string;
  description?: string;
};

export default function TimelineItem({
  title,
  description,
}: PropsWithChildren<Props>) {
  // gsap.registerPlugin(useGSAP);

  const [expanded, setExpanded] = useState(false);
  // const [descriptionClasses, setDescriptionClasses] = useState(
  //   `${styles.timelineItem__description} ${styles.timelineItem__descriptionCollapsed}`,
  // );

  function expandDescription() {
    setExpanded(!expanded);
  }

  const descriptionClasses = `${styles.timelineItem__description} ${
    expanded
      ? styles.timelineItem__descriptionExpanded
      : styles.timelineItem__descriptionCollapsed
  }`;

  // const container = useRef(null);
  // useGSAP(
  //   () => {
  //     // create expand/collapse animation
  //     if (expanded) {
  //       gsap.to(container.current, {
  //         height: "auto",
  //         duration: 0.3,
  //       });
  //     }
  //   },
  //   { scope: container },
  // );

  return (
    <div className={styles.timelineItem} onClick={expandDescription}>
      {/***********************+ HEADER **************************/}
      <div className={styles.timelineItem__header}>
        <div className={styles.timelineItem__icon}>
          <FontAwesomeIcon icon={faClock} size={"lg"} />
        </div>
        <h1 className={styles.timelineItem__title}>{title}</h1>

        {description && (
          <FontAwesomeIcon
            icon={faFileLines}
            size={"lg"}
            style={{
              color: "#d1d1d1",
            }}
          />
        )}
      </div>

      {/***********************+ DESCRIPTION *********************/}
      {description && <Card className={descriptionClasses}>{description}</Card>}
    </div>
  );
}
