import React, {useState} from "react"
import "./Count.css"
function App(){
const [count, setCount] = useState(0);
const [count1, setCound] = useState(0)

const qoshish = () =>{
  setCount(count + 1);
  setCound(count1 + .1)
}
const ayrish = () =>{
  setCount(count - 1);
  setCound(count1 - .1)
}
const NollgaTeng = () =>{
  setCount(0);
  setCound(0)
}



    return(
       <div className="bg">
          <div className="content">
          {count}
          <progress className="progress" value={count1}></progress>
          {count == 10 &&(
            <button  className="qoshish10">+</button>
          )}
          {count < 10 &&(
          <button className="qoshish" onClick={qoshish}>+</button>  
          )}
          {count == 0 &&(
            <button className="ayrish0">-</button>
          )}
          {count > 0 &&(
            <button className="ayrish" onClick={ayrish}>-</button>
          )}
          <button className="noll nol" onClick={NollgaTeng}>0</button>
          </div>
       </div>
    )
}
export default App;