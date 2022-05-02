import { motion } from 'framer-motion';

function Intro() {
  const line1 = "🎂Happy🎂 Birthday Summer-lee!!";
  const line2 = "Congratulations, you've finally reached the wonder years... wonder where your car is parked? Wonder where you left your phone? Wonder where your glasses are? Wonder what day it is?";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
      <motion.h1 initial="hidden" animate="visible" variants={sentence}>
        {line1.split('').map((char, index) => {
            return (
              <motion.span className='first' key={char + '-' + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
  );
}

export default Intro;
