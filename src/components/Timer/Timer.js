import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import FormattedTime from '../FormattedTime/FormattedTime';
import styles from './Timer.module.scss'; 

const Timer = () => {
  const [time, setTime] = useState(0)
  const [stop, setStop] = useState(false)

    useEffect(() => {
      let timer = null;

      if(stop) {
        timer = setInterval(() =>{
          setTime(prevValue => prevValue + 100)
        }, 100)
      } else {
        clearInterval(timer);
      }

      return () =>
         clearInterval(timer)
    }, [time, stop])

    const startRun = () => {
      setStop(true);
    };
    
    const stopRun = () => {
      setStop(false);
    };
    
    const resetRun = () => {
      setStop(false);
      setTime(0);
    };
  
  return ( 
    <div className={styles.container}>
     <FormattedTime time={time} />
     <button className={styles.button} onClick={() => startRun()}>Start</button>
     <button className={styles.button} onClick={() => stopRun()}>Stop</button>
     <button className={styles.button} onClick={() => resetRun()}>Reset</button>
    </div>
  );
}

export default Timer;