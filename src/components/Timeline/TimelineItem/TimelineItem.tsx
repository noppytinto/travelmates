"use client";

import { useState, useLayoutEffect, useRef, useEffect } from "react";
import styles from "./TimelineItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/ui/Card/Card";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";

export default function TimelineItem() {
  // gsap.registerPlugin(useGSAP);

  const [expanded, setExpanded] = useState(false);
  const [descriptionClasses, setDescriptionClasses] = useState(
    `${styles.timelineItem__description} ${styles.timelineItem__descriptionCollapsed}`,
  );

  function expandDescription() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    if (expanded) {
      setDescriptionClasses(
        `${styles.timelineItem__description} ${styles.timelineItem__descriptionExpanded}`,
      );
    } else {
      setDescriptionClasses(
        `${styles.timelineItem__description} ${styles.timelineItem__descriptionCollapsed}`,
      );
    }
  }, [expanded]);

  const container = useRef(null);

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
    <div className={styles.timelineItem}>
      <div className={styles.timelineItem__iconContainer}>
        <FontAwesomeIcon icon={faClock} size={"lg"} />
      </div>
      <Card
        className={styles.timelineItem__content}
        onClick={expandDescription}
      >
        <h1 className={styles.timelineItem__title}>Timeline Item</h1>
        <div className={descriptionClasses}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </Card>
    </div>
  );
}
