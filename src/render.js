import React from "react";
import styled from 'styled-components';
import "./App.css";

const Button = styled.button`

    color: red;
`;

const ButtonDiv = styled.div`

    margin-bottom: 3%;
`;

function RenderCards (props) {

    return ( 
        <ButtonDiv>
           <Button onClick= {() => {
               props.render(props.renderState + 1);
               console.log("Nasa cards have been rendered " + props.renderState + " times");
           }}>Render New Set of Cards</Button>
        </ButtonDiv>

    )
}


export default RenderCards;