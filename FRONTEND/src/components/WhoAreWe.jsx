import React from "react";
import { data } from "../reatApi.json";

const WhoAreWe = () => {
  return (
    <section className="who_we_are" id="who_we_are">
      <div className="container" style={{ display: "flex" }}>
        <div className="text_banner">
          {data[0].who_we_are.slice(0, 2).map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 style={{ fontWeight: "300" }} className="heading">
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
        <div
          className="image_banner"
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img src="/center.svg" alt="center" className="gradient_bg" />
          <img src="/whoweare.png" alt="who" />
        </div>
        <div className="text_banner">
          {data[0].who_we_are.slice(2).map((element) => {
            return (
              <div className="card" key={element.id}>
                <h1 style={{ fontWeight: "300" }} className="heading">
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
