import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled, {div} from 'styled-components';
import Cards from "./card";
import RenderButton from "./render"
import Nav from "./nav"
import img from './images/seamlessspace_0.PNG';


function App() {

 

  const [data, setData] = useState([]);
  const [renderCards, setRender] = useState(0);
  //cardData = response["data"].map(item => <Cards image ={item["hdurl"]} title={item["title"]} content={item["explanation"]} />);


  const AppDiv = styled.div`
    text-align: center;
    display: flex;
    flex-flow: column;
    background-image: url(${img});
   
  `;

  const CardDiv = styled.div`

    margin: 3% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const Image = styled.img`

  `;

  useEffect (() => {
    
    const getInfo = () => {axios.get("https://api.nasa.gov/planetary/apod?api_key=XEnTO9qcEqV3skvpvTUFncZPXhQeNHUNiKTnxyPN&count=9")
    .then( response => {
      
      setData(response["data"]);
    })
    .catch(error => {
      console.log(error);
    })}

    getInfo();
    console.log(data);

  }, [renderCards]);

  

  return (
    <AppDiv>            
        <Nav />
        <CardDiv>
        {data.map(items => <Cards image ={items["hdurl"]} title={items["title"]} content={items["explanation"]} /> )}
        
        </CardDiv>
        <RenderButton render={setRender} renderState={renderCards} />
    </AppDiv>   
    
  );
}

export default App;
