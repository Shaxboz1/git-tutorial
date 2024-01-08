import React, {useState} from "react"
import "./Count.css"
import bell from "./img/bell-solid-24.png"
import bellOff from "./img/bell-off-solid-24.png"
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
const bezvuk = () =>{
  setCound(0)
  setCount(0)
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
          {count == 0 &&(
          <img className="bell" src={bellOff}/>
          )||(
            <img className="bell-off" onClick={bezvuk} src={bell} alt="" />
          )}
          </div>
       </div>
    )
}
export default App;