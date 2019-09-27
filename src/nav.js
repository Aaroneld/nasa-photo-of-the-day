import React from "react";
import styled from 'styled-components';
import "./App.css";

const Header = styled.header`

    color: white;
`;

function Nav () {

    return ( 
        <Header>

          <h1>Nasa PHOTOS!!</h1>
        </Header>

    )
}


export default Nav;