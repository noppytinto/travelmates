import styles from "./Button.module.scss";
import { PropsWithChildren } from "react";
import { WithClassName } from "@/types/style";

type Props = PropsWithChildren & WithClassName & {};

function Button({ children, className }: Props) {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
}

export default Button;
