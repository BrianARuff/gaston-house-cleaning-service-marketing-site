import React from "react";

const servicePlanList = (props) => {
  return (
    <>
    <h3 className="service-plans-header">Service Plans</h3>
      <div className="service-plans-list">
      {props.children}
    </div>
    </>
  )
}

export default servicePlanList;