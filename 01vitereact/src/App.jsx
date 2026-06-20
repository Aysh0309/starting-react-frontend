import Practice from "./Practice"
const username="AAYUSH"
function App() {
  return (
    //this is called the fragment 
    //we create this as onnly a single element can be returned
    <>
  <Practice/>
  <h2>hello i am {username}</h2>
  <p>this is where i practice reacct

  </p>
  </>
  )
}
//using currly braces we can inject evalutated js

export default App
