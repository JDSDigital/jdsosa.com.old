import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Link from "@material-ui/core/Link"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx"
// import Img from "gatsby-image"

class WorkSection extends React.Component {
  render() {
    const { classes, portfolio } = this.props

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Portfolio</h2>
            <p className={classes.description}>
              Here are some of my recent projects
            </p>
          </GridItem>
          <GridContainer justify="center" className={classes.portfolio}>
            {portfolio.map((item, index) => (
              <GridItem
                key={`portfolio-${index}`}
                xs={12}
                sm={6}
                md={4}
                className={classes.portfolioItem}
              >
                <Link href={item.url} target="_blank" rel="noopener">
                  <img
                    src={`portfolio/${item.image}`}
                    alt={item.title}
                    className={classes.portfolioImage}
                  />
                </Link>
                <h3>{item.title}</h3>
                <hr />
                <p>{item.description}</p>
              </GridItem>
            ))}
          </GridContainer>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(workStyle)(WorkSection)
