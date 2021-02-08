import React from "react"

const plan2 = props => {
  return (
    <div className="plan-2">
      <h4 className="plan-2-title">Preimum Plan</h4>
      <div className="plan-2-service-grid">
        <div className={props.image}></div>
        <ul className="plan-2-service-list">
          <li>
            <h5>Schedule At least Four Appointments for 10% Off</h5>
          </li>
          <li>
            <p>
              Like our service and want more of it? Why not schedule at least
              four appointments a month, and we will clean your home on a weekly
              basis.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default plan2
