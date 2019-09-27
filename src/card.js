import React, {useState} from "react";
import styled from 'styled-components'; 
import "./App.css";



function NasaCard (props) {

    const [isHidden, setVisibility] = useState(true);

    const CardDiv = styled.div`

        display: flex;
        flex-flow: column;
        flex-basis: 10%;
        margin-bottom: 2%;
    `;

    const Image = styled.img`
        flex-basis: 50%;
        max-width: 25vw;
        min-width: 25vw;
        max-height: 25vw;
        min-height: 25vw;
        color: white;
        
    `;

    const Toggle = styled.p`

        color: white;
        font-size: 75%;
        opacity: .5;
    `;

    const CardText = styled.div`

        border: 10px dashed red;
        background: white;
        padding: 3%;
        opacity: .8;
        text-align: left;
    `;

    function randomBorder() {

        let borderArr = ["red" , "green", "blue", "purple", "yellow", "orange"];
  
        let color = borderArr[Math.floor((Math.random() * borderArr.length))]; 
        
        let style = {
            boxShadow: `0 4px 8px 0 ${color}, 0 6px 20px 0 ${color}`
        };

        return style;
    }
       
    
    return ( 
        <CardDiv>
            <Image src={props.image} alt="no-image" style={randomBorder()}></Image>
            <Toggle onClick= { () =>
                {if (isHidden)
                setVisibility(false)
                else
                setVisibility(true)}}> 
                
                Display/Close
            </Toggle>

            {(!isHidden) &&  
            <CardText>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </CardText>}

        </CardDiv>

    )
}


export default NasaCard;