import { useRef, useState } from 'react';

export default function Player() {
  const nameInput = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleNameChange() {
    setPlayerName(nameInput.current.value);
    nameInput.current.value = ""
  }

  document.getElementByNam

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown"} entity</h2>
      <p>
        <input type="text" ref={nameInput} />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
