import React, { Component } from "react";

class ClassClick extends Component{

    buttonPressed(){
        console.log("hi classclick")
    }

    render(){
        return(
            <div>
                <button onClick={() => this.buttonPressed()}>classclick</button>
            </div>
        )
    }

    
}

export default ClassClick;