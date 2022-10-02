import React from "react";
import BotCard from "./BotCard";


function BotCollection({bots,deleteBot,addToMyBotArmy}) {

  const botsList = bots.map((bot)=>{
    return (
      <BotCard addToMyBotArmy={addToMyBotArmy}  key={bot.id} bot={bot}></BotCard>
    )
  })
  return (
    <div className="ui four column grid">  
       <div className="row">
       {botsList}
       </div>    
    </div>
  );
}

export default BotCollection;
