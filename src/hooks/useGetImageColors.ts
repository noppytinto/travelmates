import { useEffect, useState } from "react";
import { FastAverageColor, FastAverageColorResult } from "fast-average-color";

const useGetImageColors = (url: string) => {
  const [colors, setColors] = useState<FastAverageColorResult | null>(null);
  const fac = new FastAverageColor();

  useEffect(() => {
    fac
      .getColorAsync(url, { algorithm: "simple" })
      .then((color) => {
        setColors(color);
      })
      .catch((e) => {
        console.error("ffffffffffffffff ERROR: ", e);
      });
  }, [url]);

  return colors;
};

export default useGetImageColors;
