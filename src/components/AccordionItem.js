import React , {useState }from "react"

const AccordionItem = (props) => {
    const [showItem, setShowItem ] =  useState(false) ;

    const handleShow = () => {
        console.log("handelShow called !!");
        setShowItem(!showItem) ;
    }
    return (
        <>
        <div  onClick={handleShow} className="player-item">
            <span>{props.data.name}</span>
            <span className="hide-show-icon">
                {showItem ? "hide details " : "show details"}
            </span>
            <div className={showItem ? "player-desc-vis" : "player-desc-hid"}>
                <p>{props.data.desc}</p>
            </div>
        </div>
        </>

    );
}

export default AccordionItem; 