import React from "react";

const ButtonPropChild=(props)=>{
    return(
        <div>
        hello
        <button onClick={props.handleButton}>click</button>
        </div>
    );
}
export default ButtonPropChild;