import React from "react"

const SnackbarItem = (props) => {
    const {showToast} = props ;
    console.log(showToast);
    return(
        <div className="tost-container">
            {props.data.title}       
        </div>
    );
}

export default SnackbarItem ;
