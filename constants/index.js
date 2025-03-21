import { Typewriter } from 'react-simple-typewriter';

export const TYPEWRITER = ({ words, typeSpeed, cursor, cursorStyle }) => {
  return (
    <Typewriter
      words={words}
      loop={1}
      typeSpeed={typeSpeed}
      cursor={cursor}
      cursorStyle={cursorStyle}
    />
  );
};

export const INVIEWSLIDE = (startX = -100, delay = 0.5) => ({
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: startX },
    transition: { duration: 2, delay: delay },
  });