import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botsDetails,setBotsDetails] = useState([])  
  const [selectedBots, setSelectedBots] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((res)=>res.json())
    .then((botsData)=>setBotsDetails(botsData))
   },[])
  

  function addToMyBotArmy(bot){
    setSelectedBots((prevbot)=>{
      return [...prevbot,bot]
    })
  }
   console.log(addToMyBotArmy)
  return (
    <div>
      <YourBotArmy    bots={selectedBots}/>
      <BotCollection addToMyBotArmy={addToMyBotArmy}  bots={botsDetails} />
    </div>
  )
}

export default BotsPage;