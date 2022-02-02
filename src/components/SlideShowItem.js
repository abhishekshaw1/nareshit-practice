import React from "react"


const SlideShowItem = (props) => {
    const {show} = props ;
    return (
        <div className={`player-slideshow ${show ? "": "player-slideshow-hidden"}`}>
            <img src={props.data.url} />
        </div>
    );
}

export default SlideShowItem;