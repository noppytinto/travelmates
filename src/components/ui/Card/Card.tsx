import React, { forwardRef, PropsWithChildren } from "react";
import styles from "./Card.module.scss";

type Props = {
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};

const Card = forwardRef(function Card(
  { className, onClick, children }: PropsWithChildren<Props>,
  ref,
) {
  return (
    <div
      ref={ref as any}
      className={`${styles.card} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

export default Card;
