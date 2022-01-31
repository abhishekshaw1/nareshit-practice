import React from "react"
import "../styles/Accordion.css"
import AccordionItem from "./AccordionItem"
const Accordion = (props) => {
    const players = props.data ;
    console.log(players, "props");
    
    return (
        <div className="accordian-container">
            {
                players.map((player, index) => {
                    return <AccordionItem  data={player} /> 
                })
            }
        </div>
    );
}

export default Accordion;