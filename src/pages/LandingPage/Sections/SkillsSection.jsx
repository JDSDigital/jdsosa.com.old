import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import StorageIcon from "@material-ui/icons/Storage"
import LaptopWindowsIcon from "@material-ui/icons/LaptopWindows"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import SkillsArea from "components/SkillsArea.tsx"

import skillsStyle from "assets/jss/material-kit-react/views/landingPageSections/skillsStyle.jsx"

class SkillsSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Skills</h2>
            <p className={classes.description}>
              I have 1 year of experience as a Javascript Fullstack Developer,
              but ever since I've started programming professionaly in 2016 I've
              worked in both backend (PHP+MySQL) and frontend (Bootstrap+SASS)
              positions.
            </p>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <SkillsArea
                title="Frontend"
                description={[
                  "React",
                  "TypeScript",
                  "Gatsby",
                  "SASS",
                  "LESS",
                  "SEO",
                ]}
                icon={LaptopWindowsIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <SkillsArea
                title="Backend"
                description={[
                  "Node",
                  "Express",
                  "PHP",
                  "MySQL",
                  "NoSQL",
                  "GraphQL",
                  "AWS",
                ]}
                icon={StorageIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(skillsStyle)(SkillsSection)
