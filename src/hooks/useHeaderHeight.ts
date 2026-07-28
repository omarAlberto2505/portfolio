import { useState, useLayoutEffect, type RefObject } from "react";

export default function useHeaderHeight(ref: RefObject<HTMLElement | null>) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const updateHeight = () => {
      const rect = element.getBoundingClientRect();
      setHeight(Math.round(rect.height));
    };

    updateHeight();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => updateHeight())
        : null;

    if (observer) {
      observer.observe(element);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener("resize", updateHeight);
    };
  }, [ref]);

  return height;
}
