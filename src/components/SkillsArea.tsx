import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import skillsStyle from "../assets/jss/material-kit-react/components/skillsStyle.jsx"

type Props = {
  classes: object
  icon: Function
  title: string
  description: string
  iconColor?:
    | "primary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "rose"
    | "gray"
  vertical: boolean
}

const styles = (value: object): any => {
  return withStyles(value)
}

function SkillsArea<Props>({ ...props }) {
  const { classes, title, description, iconColor = "gray", vertical } = props
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  })
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  })
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <ul className={classes.description}>
          {description.map((skill: object, index: number) => (
            <li key={`skill-${title}-${index}`}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default styles(skillsStyle)(SkillsArea)
