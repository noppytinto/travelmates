import React, { useEffect } from "react";
import styles from "./FlagImage.module.scss";
import Image from "next/image";
import useGetImageColors from "@/hooks/useGetImageColors";

type Props = {
  src: string;
  name: string;
  alt: string;
};

const Flag: React.FC<Props> = ({ src, name, alt }) => {
  const colors = useGetImageColors(src);

  useEffect(() => {
    console.log("fffffffffffff Flag colors:", colors);
  }, [colors]);

  return (
    <article className={styles.flag}>
      <Image
        src={src}
        alt={`flag of ${name}`}
        title={`flag of ${name}`}
        width={0}
        height={0}
        className={styles.flagImage}
      />
      <div className={styles.flagDetailsContainer}>
        <div
          className={styles.flagDetails}
          style={{
            backgroundColor: colors?.value
              ? `rgba(${colors.value.slice(0, 3).join(",")}, .4)`
              : "",
            color: colors?.isDark ? "white" : "black",
          }}
        >
          <p className={styles.flagTitle}>{name}</p>
        </div>
      </div>
    </article>
  );
};

export default Flag;
