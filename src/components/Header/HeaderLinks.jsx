/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
// import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// React icons
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

// core components
import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes, drawer } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
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
            rel="noopener"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter />
            {drawer && <span className={classes.marginLeft10}>Twitter</span>}
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
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
            rel="noopener"
            className={classes.navLink}
          >
            <FaLinkedin />
            {drawer && <span className={classes.marginLeft10}>LinkedIn</span>}
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
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
            rel="noopener"
            className={classes.navLink}
          >
            <FaGithub />
            {drawer && <span className={classes.marginLeft10}>Github</span>}
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
