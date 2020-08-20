import React, { Component } from "react";
import Wrapper from "../component/wrapper";
import Card from "../component/Card";
import project from "../projects.json"

class projects extends Component{
  state = { 
    projects : project
  };
  render() {

    return (
      <div>
      <Wrapper>

      {this.state.projects.map(project => (
      <Card 
      name = {project.name}
      description = {project.description}
      img = {project.img}
      deployedLink = {project.deployedLink}
      githubLink = {project.githubLink}
      />
      ) 
      )}
        

      </Wrapper>  
      

    </div>
    )
}  
    
    
  }
  

  export default projects;