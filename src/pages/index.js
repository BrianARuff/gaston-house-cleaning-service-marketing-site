import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridContainer from "../components/gridContainer"
import Article1 from "../components/article1"
import Article2 from "../components/article2"
import Plan1 from "../components/plan1"
import Plan2 from "../components/plan2"
import ServicePlanList from "../components/servicePlanList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GridContainer>
      <Article1 />
      <Article2 />
    </GridContainer>
    <ServicePlanList>
      <Plan1
        image={`plan-1-service-image`}
        title={`Basic Plan`}
        header={`Schedule a One Time Cleaning`}
        description={`Just need a one time cleaning? We have got you covered. Our cleaning technicians will come out and get your home cleaned.`}
      />
      <Plan2
        image={`plan-2-service-image`}
        title={`Preimum Plan`}
        header={`Schedule At least Four Appointments for 10% Off`}
        description={`>Like our service and want more of it? Why not schedule at least four appointments a month, and we will clean your home on a weekly basis.`}
      />
    </ServicePlanList>
  </Layout>
)

export default IndexPage
