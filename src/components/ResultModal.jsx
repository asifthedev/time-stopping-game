import { useRef, useImperativeHandle } from 'react';

function ResultModal({ ref, result, targetTime, remainingTime }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      name: 'Asif Shahzad',
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        Your stopped the timer with <strong>{remainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
