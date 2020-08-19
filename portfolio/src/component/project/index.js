import React from "react";
import Carousel from "react-bootstrap/Carousel"
import "./style.css"
import hangryFixed from "../image/hangryFixed.png"
import happyPaw from "../image/husky.png"
import empDir from "../image/empdir.png"

function projects() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 examples"
          src={hangryFixed} alt="okay"
          // alt="First slide"
        />
        <Carousel.Caption>
          <h3>hangryFixed</h3>
          <p>As a picky and indecisive eater I want to search restaurants near me That fullfills some search criteria such as price, location and offering take-out. As a gathering of big group of people I want an application that will randomly choose a
                    restaurant So that we don't waste time figuring out where to eat.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 examples"
          src={happyPaw} alt="happypaw"
          // alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 examples"
          src={empDir} alt="employee"
          // alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

    export default projects;