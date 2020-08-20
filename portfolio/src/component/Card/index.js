import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'



function projectCard(props) {
  return (
    
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
    {props.description}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="{props.deployedLink}">Card Link</Card.Link>
    <Card.Link href="{props.githubLink}">Another Link</Card.Link>
  </Card.Body>
</Card>
    
  );
}

export default projectCard;
