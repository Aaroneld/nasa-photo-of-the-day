import React, {useState, useEffect} from "react";
import axios from 'axios';
import Cards from "./card";
import RenderButton from "./render"
import Nav from "./nav"
import "./App.css";

function App() {

 

  const [data, setData] = useState([]);
  const [renderCards, setRender] = useState(0);
  //cardData = response["data"].map(item => <Cards image ={item["hdurl"]} title={item["title"]} content={item["explanation"]} />);

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
    <div className="App">
      
      <Nav />
      <div className="cards-div">
      {data.map(items => <Cards image ={items["hdurl"]} title={items["title"]} content={items["explanation"]} /> )}
      
      </div>
      <RenderButton render={setRender} renderState={renderCards} />
    </div>
  );
}

export default App;
