import { useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialog = useRef();
  const stoppedInSeconds = remainingTime / 1000;
  const isUserLost = stoppedInSeconds <= 0 ? true : false;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {isUserLost && <h2>You lost!</h2>}
      {!isUserLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        Your stopped the timer with <strong>{stoppedInSeconds.toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>, document.getElementById("modal")
  );
}

export default ResultModal;
