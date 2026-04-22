import { useRef, useImperativeHandle } from 'react';

function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialog = useRef();
  const stopedInSeconds = remainingTime / 1000;
  const winningStatus = stopedInSeconds <= 0 ? 'lost!' : 'won!';

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>You {winningStatus}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        Your stopped the timer with <strong>{stopedInSeconds.toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
