import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'



function projectCard(props) {
  return (
    
<Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
    {props.description}
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <a href={props.deployedLink} className="btn btn-info" target="_blank"><strong>Working App</strong>
                </a>
                <hr></hr>
 <a href={props.githubLink} className="btn btn-info" target="_blank"><strong>Github</strong>
</a>
  </Card.Body>
</Card>
    
  );
}

export default projectCard;
