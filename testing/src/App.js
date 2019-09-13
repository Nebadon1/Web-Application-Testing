import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
// import Display from "./components/Display";

// import "./App.css";








function App (){

const [strike, setStrike] = useState(0);

const [balls, setBalls] = useState(0);

const [foul, setFoul] = useState(0)
console.log("Balls", balls)
console.log("Strikes",strike)
console.log("fouls", foul);

if (strike > 3) {
  setStrike(0);
}
if (balls > 4){
  setBalls(0);
}

const addFoul = e => {
 
 setFoul(state => {
   if (strike < 2){
     setStrike(strike + 1)
   }
   
  });
};

const hit = e => {
  setFoul(0);
  setStrike(0);
  setBalls(0)
}




return (
  <div className="App">
  <h1>Baseball App</h1>
  
   <Dashboard balls={balls} strikes={strike}/>
   {/* <Display/> */}

<div className="strikeButtons">
          <button
            onClick={() => setStrike(strike + 1)}
            className="gameButtons__changeQuarter"
          >
            Strikes
          </button>
        </div>

        <div className="BallsButtons">
<button
  onClick={() => setBalls(balls + 1)}
  className="gameButtons__changeQuarter"
>
  Balls
</button>{" "}
</div>

<div className="foulButtons">
<button
  onClick={() => addFoul()}
  className="gameButtons__changeQuarter"
>
 Foul
</button>


</div>

<div className="hitButtons">
<button
  onClick={() => hit()}
  className="gameButtons__changeQuarter"
>
 hit
</button>



</div>

  </div>

  
)

}
  

  

export default App;
