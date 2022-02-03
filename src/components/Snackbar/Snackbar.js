import React from "react"
import SnackbarItem from "./SnackbarItem"
import "../../styles/snackbar.css"

let data = {
    title: "title text",
    body: "some body text"
}
class Snackbar extends React.Component {
    constructor() {
        super();
        this.state = {
            showToast: false
        }
        this.handleShowToast = this.handleShowToast.bind(this);
        this.clearinterval=  this.clearinterval.bind(this);
        let timer ;
    }

    clearinterval () {
        if(this.timer) {
            clearTimeout(this.timer);
        }
    }

    handleShowToast() {
        this.setState({
            showToast: !this.state.showToast
        });
    }
    componentDidUpdate() {
        this.clearinterval();
        if(this.state.showToast){
            this.timer = setTimeout(()=>{
                this.setState({
                    showToast : !this.state.showToast 
                });
            },2000);
        }
        
    }
    render() {
        return (
            <div className="toast-parent">
                <button onClick={this.handleShowToast}>ShowToast</button>
                    {
                         this.state.showToast ? <SnackbarItem data={data} /> : null 
                    }
            </div>

        );
    }
}

export default Snackbar;