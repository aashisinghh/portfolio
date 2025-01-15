export const INVIEWSLIDE = (startX = -100, delay = 0.5) => ({
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: startX },
    transition: { duration: 0.5, delay: delay },
  });