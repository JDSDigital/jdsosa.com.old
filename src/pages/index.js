import React from "react"
import { graphql } from "gatsby"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"

import LandingPage from "./LandingPage/LandingPage.jsx"

export default props => (
  <LandingPage portfolio={props.data.allMongodbJdsosaPortfolio.nodes} />
)

export const query = graphql`
  query MyQuery {
    allMongodbJdsosaPortfolio {
      nodes {
        image
        description
        title
        url
      }
    }
  }
`
