import "./App.css"
import {useRef, useState} from "react"




function App(){
  const [seconds,setSeconds] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [hours,setHours] = useState(0)
 const intervalRef = useRef(null)


  const startTimer = () => {
   intervalRef.current = setInterval(()=>{
      setSeconds(prev=>prev+1)
    },1000)
  }

const stopTimer  =()=> {
  clearInterval(intervalRef.current)
}

const reset = () => {
  setSeconds(0)
  setMinutes(0)
  setHours(0)
}

if(seconds===60){
  setMinutes(minutes=>minutes+1)
  setSeconds(0)
}


if(minutes===60){
  setHours(hours=>hours+1)
  setMinutes(0) 
}



  return(
    <div className="App">
    <h1>Time: {hours} h : {minutes} m : {seconds} s</h1>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App