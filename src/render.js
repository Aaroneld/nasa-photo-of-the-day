import React from "react";
import "./App.css";


function RenderCards (props) {

    return ( 
        <div className="button-div">
           <button onClick= {() => {
               props.render(props.renderState + 1);
               console.log("Nasa cards have been rendered " + props.renderState + " times");
           }}>Render New Set of Cards</button>
        </div>

    )
}


export default RenderCards;