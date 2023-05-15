import React, { useState, FormEvent } from 'react';

const Timer = () => {
  const [isStarted, setIsStarted] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault(); 
    setIsStarted(!isStarted);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {!isStarted ? <h1>15: 00</h1> : <h1>14: 59</h1>}
        <button type="submit">시작</button>
      </form>
    </>
  );
};

export default Timer;