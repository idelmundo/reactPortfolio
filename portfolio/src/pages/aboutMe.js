import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from "../component/image/me.png"
// import Style from "./style.css"

function aboutMe(){
    return(
        <div className= "row justify-content-center">
<Card style={{ width: '45%' }}>
  <Card.Img variant="top" src={Me} alt="me"/>
  <Card.Body>
    <Card.Title>About Me</Card.Title>
    <p>
    I, Isaias Del Mundo, am a full stack developer living in Hayward, California. I have a certiciate in Electronic technology and Automotive technology from College of San Mateo and Wyotech. Currently enrolled at the UC Berkeley extension Full
    Stack developer. I chose this school becauce its associated with UC Berkeley and i think thats prety cool having that in my resume. 
    I've been in automotive industry since I was 16 years old and moving into a progorammer world is pretty interesting. I love cars and it gets annoying when things don't go the right way just like coding. Nothing brings me more pleasure than
    making something from scratch. Even when the result are far from what my ideal expectaions.
    </p>
  </Card.Body>
</Card>
</div>
    )}

export default aboutMe;