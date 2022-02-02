import React ,{useState} from "react"
import "../../styles/modal.css"
import ModelItem from "./ModalItem";
const Modal = () => {
    const [showModal, setShowModal] = useState(false) ;

    const toggleHandle = () => {
        console.log("toggel Called");
        setShowModal(!showModal);
    }

    console.log(typeof showModal ,"modal", showModal);
return (
        <div>
            <button className="mdl-btn" onClick={toggleHandle}>{showModal  ? "hideModal" : "showModal"}</button>
            {
                showModal && <ModelItem />
            }
            
        </div>
    );
}

export default Modal ;