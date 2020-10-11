import { cardTitle, title } from "assets/jss/material-kit-react.jsx"
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const teamStyle = {
  section: {
    padding: "70px 0 20px",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "0",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#555",
    fontSize: "18px",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
}

export default teamStyle
