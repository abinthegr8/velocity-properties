import { useCallback } from "react";

export default function useCarousel(length, activeIndex, setActiveIndex) {
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
  }, [length, setActiveIndex]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  }, [length, setActiveIndex]);

  return { handleNext, handlePrev };
}
