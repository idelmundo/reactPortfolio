import React from "react";
// import HelloBootstrap from "./component/HelloBootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Header from "./component/header";
import aboutMe from "./pages/aboutMe"
import project from "./pages/project";
import contactMe from "./pages/contactMe";
import Wrapper from "./component/wrapper";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
    <div>
  <Navbar/>
  <br></br>
  <Header/>
<br></br>
<Route exact path= "/" component={aboutMe} /> 
<Route exact path= "/aboutMe" component={aboutMe} />  
  <Wrapper>
  <Route exact path= "/project" component={project} />  
  </Wrapper>
  <br></br>
  <Route exact path= "/contactMe" component={contactMe} />
  </div>
  <Footer/>
  
  </Router>
  )
}

export default App;

