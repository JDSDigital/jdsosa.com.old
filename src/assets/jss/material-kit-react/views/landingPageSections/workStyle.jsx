import { title } from "assets/jss/material-kit-react.jsx"

const workStyle = {
  section: {
    padding: "20px 0 70px",
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#444",
    textAlign: "center",
    fontSize: "18px",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  portfolioImage: {
    width: "100%",
    height: "auto",
    boxShadow:
      "0 8px 7px 1px rgba(0, 0, 0,0.14), 0 3px 5px 2px rgba(0, 0, 0,0.12), 0 5px 5px -3px rgba(0, 0, 0,0.2)",
    transition: "all .2s cubic-bezier(0.4,0,0.2,1)",
    borderRadius: "3px",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  portfolio: {
    margin: "30px 0",
    "& h3": {
      color: "#3C4858",
      margin: "16px 0 0 0",
      fontSize: "20px",
    },
    "& p": {
      color: "#555",
    },
  },
  portfolioItem: {
    marginBottom: "35px",
  },
}

export default workStyle
