import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid-container">
      <div className="left">
        <h3 className="left-header">We do the Heavy Lifting for You</h3>
        <p className="left-description">Gaston Home Cleaning Services will do the heavy lifting for you. You work hard and you play hard. Let us work hard for  you! We offer in home cleaning services in the <strong>Greater Charlotte Area</strong>.</p>
        <p><strong><a href="tel:980-240-6927">Schedule Appointment</a></strong></p>
      </div>
      <div className="right"></div>
    </div>

    <h3 className="service-plans-header">Service Plans</h3>
    <div className="service-plans-list">
      
      <div className="plan-1">
        <h4 className="plan-1-title">Basic Plan</h4>
        <div className="plan-1-service-grid">
          <div className="plan-1-service-image"></div>
            <ul className="plan-1-service-list">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
        </div>
        
        <div className="plan-2">
          <h4 className="plan-2-title">Preimum Plan</h4>
          <div className="plan-2-service-grid">
            <div className="plan-2-service-image"></div>
              <ul className="plan-2-service-list">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>
          </div>
      </div>
  </Layout>
)

export default IndexPage
