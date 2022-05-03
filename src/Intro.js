import { motion } from 'framer-motion';
import summatime from './assets/summerlee.png'

function Intro() {
  const line1a = "Happy";
  const line1b = "Birthday"
  const line1c = "Summatime!"

  const line2 = "Summer-lee, you mean so much to all of us. We wish you a year full of adventure, excitement and happiness! Cheers to your personal new years, we are sending you an abundance of love this birthday. ";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.07,
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
    <div className='intro'>
      <h1 className='happyBirthdayIntro'>{line1a}</h1>
      <h1 className='happyBirthdayIntro'>{line1b}</h1>
      <h1 className='happyBirthdayIntro'>{line1c}</h1>
      <img className="photo" src={summatime}/>
      <motion.h1 initial="hidden" animate="visible" variants={sentence}>
        {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
}

export default Intro;
