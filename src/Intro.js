import { motion } from 'framer-motion';
import summatime from './assets/summerlee.png'
import ReactCanvasConfetti from 'react-canvas-confetti';

// const canvasStyles = {
//   position: 'fixed',
//   pointerEvents: "none",
//   width: "100%",
//   height: "100%",
//   top:0,
//   left:0
// }
function Intro() {

  
  // const handleWow = ()=>{

  //   myConfetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: { y: 0.6 }
  //   });
  // }

  // var myConfetti = confetti.create(myCanvas, {
  //   resize: true,
  //   useWorker: true
  // });

  const line1a = "Happy";
  const line1b = "Birthday"
  const line1c = "Summatime!"

  const line2 = "Summer-lee, you mean so much to all of us. We wish you a year full of adventure, excitement and happiness! Cheers to your personal new years, we are sending you an abundance of love this birthday. ";

  const sentence = {
    hidden: { opacity: 0, deplay:3.5 },
    visible: {
      opacity: 1,
      transition: {
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

  const headerRight = {
    hidden: {
      opacity:0,
      x:300},
    visible: {
      opacity:1,
      x:0}
  }

  const headerLeft = {
    hidden: {
      opacity:0,
      x:-300},
    visible: {
      opacity:1,
      x:0}
  }

  return (
    <div className='intro'>
      {/* <button onClick={handleWow}>WoW</button> */}
      <motion.h1 initial="hidden" transition={{duration:1}} animate="visible" variants={headerRight} className='happyBirthdayIntro'>{line1a}</motion.h1>
      <motion.h1 initial="hidden" transition={{duration:1, delay:1}} animate="visible" variants={headerLeft} className='happyBirthdayIntro'>{line1b}</motion.h1>
      <motion.h1 initial="hidden" transition={{duration:1, delay:2}} animate="visible" variants={headerRight} className='happyBirthdayIntro'>{line1c}</motion.h1>
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
