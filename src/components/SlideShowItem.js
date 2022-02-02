import React from "react"


const SlideShowItem = (props) => {
    const {index,show,data} = props ;
    return (
        <div className={`player-slideshow ${show ? "": "player-slideshow-hidden"}`}>
            <img src={data.url} alt={`${index}`}/>
        </div>
    );
}

export default SlideShowItem;