import { useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

//useCallback(fn,dependencies) so this will be cahcd and called everytime any change is made
  const passwordGenerator=()=>{
     
  }

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
