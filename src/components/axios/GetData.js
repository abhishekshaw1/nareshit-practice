import React,{useState} from "react"
import "../../styles/getdata.css"
import UserTable from "../axios/UserTable"

const Getdata = () => {
    const [showData, setShowData] = useState(false);

    const toggelShowData = () => {
        console.log("clicked !!");
        setShowData(!showData);
    }
    return(<div className="get-data-container">
        <button onClick={toggelShowData}>Getdata</button>
        {showData && <UserTable />}
        </div>) 
}

export default Getdata ;