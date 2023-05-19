import React, { useState, FormEvent } from 'react';

const Timer = () => {
  const [isStarted, setIsStarted] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault(); 
    setIsStarted(!isStarted);
  }

  const beforeStart = (): JSX.Element  => {
    return (
      <>
        <h1>15:00</h1>
      </>
    )
  }

  const afterStart = (): JSX.Element  => {
    return (
      <>
        
      </>
    )
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {!isStarted ? beforeStart() : afterStart()}
        <button type="submit">시작</button>
      </form>
    </>
  );
};

export default Timer;