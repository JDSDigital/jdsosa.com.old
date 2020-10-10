import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
} from "assets/jss/material-kit-react.jsx"

const skillsStyle = {
  infoArea: {
    margin: "0 auto",
    padding: "0px",
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  icon: {
    width: "36px",
    height: "36px",
  },
  descriptionWrapper: {
    color: grayColor,
  },
  title,
  description: {
    color: grayColor,
    marginTop: "0px",
    fontSize: "14px",
    padding: "0",

    "& li": {
      display: "inline-block",
      listStyle: "none",
      padding: "0 10px",

      "&:after": {
        content: "00b7",
      },
      "&:last-child:after": {
        content: "none",
      },
    },
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },
}

export default skillsStyle
