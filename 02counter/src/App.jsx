import { useState } from 'react'
//use state is a hook
import './App.css'

function App() {
//use to update in dom
 let [counter,setCounter]= useState(0)
  //using this we can change directly multiple points jha counter variable use ho rha hoga
  //without using get elemetbyid or any other dom maipulation
  
  
  //let  counter=69
function incrementCounter(){
  counter=counter+1;
  setCounter(counter)
  console.log(counter)
}

function decrementCounter(){
  //counter=counter-1;
  if(counter==0)
    counter=1;
  setCounter(counter-1)
  console.log(counter)
}

  return (                                           
    <>
    <h1>hello guys{counter}</h1>
    <h2>counter: {counter}</h2>
    <button
    onClick={incrementCounter}
    >increase  {counter}</button>
    <br />
    <button
    onClick={decrementCounter}
    >decrease{counter}</button>

    </>
    
  )
}

export default App
