import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

type Props = {
  className?: string;
  onClick?: () => void;
};

export default function Card({
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
