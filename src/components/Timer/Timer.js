import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import FormattedTime from '../FormattedTime/FormattedTime';
import styles from './Timer.module.scss'; 

const Timer = () => {
  const [time, setTime] = useState(0)
  const [run, setRun] = useState(false)

    useEffect(() => {
      let timer = null;

      if(run) {
        timer = setInterval(() =>{
          setRun(prevValue => prevValue + 1)
        }, 1)
      } else {
        clearInterval(timer);
      }

      return () =>
         clearInterval(timer)
    }, [run])
  
  return ( 
    <div className={styles.container}>
     <FormattedTime time={time} />
     <button className={styles.button} onClick={() => setRun(true)}>Start</button>
     <button className={styles.button} onClick={() => setRun(false)}>Stop</button>
     <button className={styles.button} onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default Timer;