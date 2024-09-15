import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us </h1>
            <p>Food is our common ground, a universal experienc</p>
          </div>
          <p className="mid">
            We are a team of food enthusiasts passionate about sharing delicious
            recipes, cooking tips, and culinary inspiration. Our mission is to
            bring people together through the joy of food, exploring flavors,
            and celebrating cultural diversity. 
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
