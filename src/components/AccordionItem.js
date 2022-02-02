import React from "react"

const AccordionItem = (props) => {
    
    const {data, index, handleShow ,showItem} = props ;
    return (
        <>
        <div id={index} onClick={handleShow} className={`player-item ${showItem ? "active" : ""}`}>
            <span>{data.name}</span>
            <span className="hide-show-icon">
                {showItem ? "hide details " : "show details"}
            </span>
            <div>
                {showItem ? <p>{data.desc}</p> : null}
            </div>
        </div>
        </>

    );
}

export default AccordionItem; 