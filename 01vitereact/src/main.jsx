import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:"Click to visit  the  google "
// }
//we can use this directly as the render funciton of react expects someother key or something else 


  const user="AAYUSH AWASTHI"
const anotherElement =(
  <a href="https://google.com" target='_blank'>visit google</a>
)
//this can be used as it is just the thing which render expect


const reactElement=React.createElement(
    "a",
    {
      href:"https://google.com",
      target:"_black"
    },
    "clickmeto visit google",
    user

)
//we can also pass variables in the elemenet
//this can be rendered as it is prepared according to the react


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> no need forthis
    //reactElement
    <App/>
  // </React.StrictMode>,
)
