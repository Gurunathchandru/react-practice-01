import React from "react";

export const Welcome = (props) => {
    console.log(props);
    return <h1>hi {props.name}, welcome to happy learning</h1>
}