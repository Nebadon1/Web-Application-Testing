import React from "react";





function Dashboard(props) {
  return (
     <div>
         <h1>Hello</h1>
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p> 
  </div> 
  );
}

export default Dashboard;
