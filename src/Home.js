import { Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function Home(){
    return <div>
        <Header title="Jordan Mccrae" text=" Height: 6'0
                &nbsp;
                Eyes: Brown
                &nbsp;
                Hair: Black
                &nbsp;
                
                Shoes: 12"/> 
      <Gallery/>  
    </div>
}

export default Home;