import React , {useState }from "react"
import "../styles/Accordion.css"
import AccordionItem from "./AccordionItem"
const Accordion = (props) => {
    const players = props.data ;

    const [showIndex, setShowIndex ] =  useState(0) ;

    const handleShow = (e) => {
        setShowIndex(e.target.id) ;
    }
    
    return (
        <div className="accordian-container">
            {
                players.map((player, index) => {
                    return <AccordionItem key={index} index={index} data={player} showItem={showIndex == index} handleShow={handleShow}/> 
                })
            }
        </div>
    );
}

export default Accordion;