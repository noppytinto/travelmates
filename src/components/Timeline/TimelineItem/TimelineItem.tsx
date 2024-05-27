"use client";

import React, { useState, PropsWithChildren, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TimelineItem.module.scss";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Card } from "@nextui-org/react";
import { WithClassName } from "@/types/style";

type Props = WithClassName & {
  title: string;
  description?: string;
};

export default function TimelineItem({
  title,
  description,
  className,
}: PropsWithChildren<Props>) {
  const timelineItemEl = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  function expandDescription() {
    setExpanded(!expanded);
  }

  useGSAP(
    () => {
      if (!timelineItemEl.current) return;

      gsap.to(`.${styles.timelineItem__description}`, {
        height: expanded ? "auto" : 0,
        duration: 0.2,
        ease: "power4.inOut",
      });
    },
    {
      scope: timelineItemEl,
      dependencies: [expanded],
    },
  );

  // =============================================
  // JSX
  // =============================================
  return (
    <div
      className={`${styles.timelineItem} ${className}`}
      onClick={expandDescription}
      ref={timelineItemEl}
    >
      {/***********************+ HEADER **************************/}
      <div className={styles.timelineItem__header}>
        <div className={styles.timelineItem__icon}>
          <FontAwesomeIcon
            icon={faClock}
            size={"lg"}
            fixedWidth
            style={{
              display: "block",
            }}
          />
        </div>

        <h1 className={styles.timelineItem__title}>{title}</h1>

        <div className="grow"></div>

        {description && (
          <FontAwesomeIcon
            icon={faFileLines}
            size={"lg"}
            style={{
              color: "#d1d1d1",
              display: "block",
            }}
            fixedWidth
          />
        )}
      </div>

      {/***********************+ DESCRIPTION *********************/}
      {description && (
        <Card className={styles.timelineItem__description}>
          <div className="p-4">{description}</div>
        </Card>
      )}
    </div>
  );
}
