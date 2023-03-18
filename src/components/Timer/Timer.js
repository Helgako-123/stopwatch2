import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import FormattedTime from '../FormattedTime/FormattedTime'; 

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
    <div className="container">
     <FormattedTime />
     <button onClick={() => setRun{true}}>Start</button>
     <button onClick={() => setRun{false}}>Stop</button>
     <button onClick={() => setTime{0}}>Reset</button>
    </div>
  );
}

export default Timer;