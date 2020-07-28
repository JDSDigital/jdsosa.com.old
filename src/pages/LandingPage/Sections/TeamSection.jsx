import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import Tooltip from "@material-ui/core/Tooltip"

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"

import profile from "assets/img/faces/profile.jpg"

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is the guy</h2>
        <div>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={profile} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Jorge Daniel Sosa
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Experienced Fullstack Web Developer with a background in IT
                    and System Administration and high problem-solving skills.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="link-twitter"
                    title="Follow me on twitter"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "top"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://twitter.com/thebeliar"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaTwitter />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="link-linkedin"
                    title="Follow me on LinkedIn"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "top"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="transparent"
                      href="https://www.linkedin.com/in/jdsosa/"
                      target="_blank"
                      className={classes.navLink}
                    >
                      <FaLinkedin />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="instagram-tooltip"
                    title="Follow me on Github"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "top"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="transparent"
                      href="https://www.github.com/jdsdigital"
                      target="_blank"
                      className={classes.navLink}
                    >
                      <FaGithub />
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(TeamSection)
