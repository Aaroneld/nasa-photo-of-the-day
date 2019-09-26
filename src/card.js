import React, {useState} from "react";
import "./App.css";



function NasaCard (props) {

    const [isHidden, setVisibility] = useState(true);

    function randomBorder() {

        let borderArr = ["red" , "green", "blue", "purple", "yellow", "orange"];
  
        let color = borderArr[Math.floor((Math.random() * borderArr.length + 1))]; 
        
        let style = {
            boxShadow: `0 4px 8px 0 ${color}, 0 6px 20px 0 ${color}`
        };

        return style;
    }
       
    
    return ( 
        <div className="card">
            <img src={props.image} className="cards-image" alt="no-image" style={randomBorder()}></img>
            <p className="toggle" onClick= { () =>
                {if (isHidden)
                setVisibility(false)
                else
                setVisibility(true)}}> 
                
                Display/Close
            </p>

            {(!isHidden) &&  
            <div className="card-text">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>}

        </div>

    )
}


export default NasaCard;