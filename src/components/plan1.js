import React from "react"

const plan1 = props => {
  return (
    <div className="plan-1">
      <h4 className="plan-1-title">{props.title}</h4>
      <div className="plan-1-service-grid">
        <div className={props.image}></div>
        <ul className="plan-1-service-list">
          <li>
            <h5>{props.header}</h5>
          </li>
          <li>
            <p>{props.description}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default plan1
