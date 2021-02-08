import React from "react";

const article1 = props => {
  return (
    <article className="left">
      <h2 className="left-header">We do the Heavy Lifting for You</h2>
      <div className="left-description">
        Gaston Home Cleaning Services will do the heavy lifting for you. You
        deserve a clean home, let us work hard for you.{" "}
         We offer in home cleaning services in the{" "} <div style={{display: `inline`}} className={"tool-tip"}>
        <strong>Charlotte Metropolitan Area</strong>
          <div className={"tool-tip-text"}>
            <ul>
              <li>Concord</li>
              <li>Gastonia</li>
              <li>Rock Hill</li>
              <li>Huntersville</li>
              <li>Mecklenburg County</li>
            </ul>
          </div>
        </div></div>
        <br></br>
      <p>
        <strong>
          <a href="tel:980-240-6927">Schedule Appointment</a>
        </strong>
      </p>
    </article>
  )
}

export default article1
