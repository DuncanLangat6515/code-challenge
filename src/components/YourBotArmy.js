import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({bots }) {
    
   
 
 
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot)=>{
            return <BotCard key={bot.id} bot={bot}></BotCard>
          })}
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
