import React, { useState } from 'react';
import './style.css';

const Button = ({name,onClick}) => (
  <button className='button' onClick={onClick}>
    {name}
  </button>
)

const Step = ({step,decreaseStep,increaseStep}) => (
    <div>
      <Button name='-' onClick={decreaseStep}></Button>
      <span> Step: {step}</span>
      <Button name='+' onClick={increaseStep}></Button>
    </div>
    
);

const Count = ({count,decreaseCount,increaseCount}) => (
  <div>
      <Button name='-' onClick={decreaseCount}></Button>
      <span> Count: {count} </span>
      <Button name='+'onClick={increaseCount}></Button>
  </div>
)

const Dater =({count}) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  
  if(count < 0) {
    return (<p> {`${Math.abs(count)} ${count === -1 ? 'day' : 'days'} ago was ${date.toDateString()}`} </p>)
  } else if (count > 0){
    return (<p> {`${Math.abs(count)} ${count === 1 ? 'day' : 'days'} from today is ${date.toDateString()}`} </p>)
  }
  return (<p> {`Today is ${date.toDateString()}`} </p>)
}
  

export default function App () {
  const [count,setCount] = useState(0);
  const [step,setStep] = useState(0);


  function increaseStep () {
    setStep((Step) => Step + 1);
  } 

  function decreaseStep() {
    setStep((step) => step -1);
  }

  function increaseCount () {
    setCount((count) => count + step);
  }

  function decreaseCount () {
    setCount((count) => count - step);
  }


  return (
    <div className='data'>
     <Step step={step} decreaseStep={decreaseStep} increaseStep={increaseStep}/>
     <Count count={count} decreaseCount={decreaseCount} increaseCount={increaseCount}/>
     <Dater count={count} step={step}/>
    </div>
  )
}