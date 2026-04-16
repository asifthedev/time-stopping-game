import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

function TimerChallenge({ title, targetTime }) {
  let dialog = useRef();
  let timer = useRef();

  const [timeRemaining, setTimeRemaining] = useState(1000 * targetTime);

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }
  
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open()
  }

  let winningStatus = "win"


  if(timeRemaining === 0){
    winningStatus = "lost"
    handleStop()
    setTimeRemaining(targetTime * 1000)
  }


  return (
    <>
      <ResultModal ref={dialog} result={winningStatus} targetTime={targetTime} remainingTime={timeRemaining/1000}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>
        <p className={isTimerActive ? 'active' : undefined}>
          {isTimerActive ? 'Timer is running...' : 'Timer is inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
