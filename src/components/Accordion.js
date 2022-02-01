import React from "react"
import "../styles/Accordion.css"
import AccordionItem from "./AccordionItem"
const Accordion = (props) => {
    const players = props.data ;
    
    return (
        <div className="accordian-container">
            {
                players.map((player, index) => {
                    return <AccordionItem  key={index} data={player} /> 
                })
            }
        </div>
    );
}

export default Accordion;