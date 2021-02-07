import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid-container">
      <article className="left">
        <h3 className="left-header">We do the Heavy Lifting for You</h3>
        <p className="left-description">Gaston Home Cleaning Services will do the heavy lifting for you. You deserve a clean home, let us work hard for you. </p>
        <p>We offer in home cleaning services in the <span className={"tool-tip"}><strong>Charlotte Metropolitan Area</strong>
          <div className={"tool-tip-text"}>
            <ul>
              <li>Concord</li>
              <li>Gastonia</li>
              <li>Rock Hill</li>
              <li>Huntersville</li>
              <li>Mecklenburg County</li>
            </ul>
          </div>
          </span>
        </p>
        <p>
          <strong>
            <a href="tel:980-240-6927">Schedule Appointment</a>
          </strong>
        </p>
      </article>
      <div className="right"></div>
    </div>

    <h3 className="service-plans-header">Service Plans</h3>
    <div className="service-plans-list">
      
      <div className="plan-1">
        <h4 className="plan-1-title">Basic Plan</h4>
        <div className="plan-1-service-grid">
          <div className="plan-1-service-image"></div>
            <ul className="plan-1-service-list">
              <li>
                <h5>Schedule a One Time Cleaning</h5>
              </li>
              <li>
                <p>Just need a one time cleaning? We have got you covered. Our cleaning technitians will come out and get your home cleaned.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="plan-2">
          <h4 className="plan-2-title">Preimum Plan</h4>
          <div className="plan-2-service-grid">
            <div className="plan-2-service-image"></div>
              <ul className="plan-2-service-list">
                <li>
                  <h5>Schedule At least Four Appointments for 10%</h5>
                </li>
                <li>
                  <p>Like our service and want more of it? Why not schedule at least four appointments a month, and we will clean your home on a weekly basis.</p>
                </li>
              </ul>
            </div>
          </div>
      </div>
  </Layout>
)

export default IndexPage
