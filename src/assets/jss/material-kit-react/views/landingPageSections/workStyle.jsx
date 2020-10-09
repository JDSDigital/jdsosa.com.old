import { title } from "assets/jss/material-kit-react.jsx"

const workStyle = {
  section: {
    padding: "20px 0 70px",
  },
  title: {
    ...title,
    marginBottom: "24px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
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
  },
  portfolio: {
    margin: "30px 0",
    "& h5": {
      color: "#3C4858",
      margin: "16px 0 0 0",
    },
    "& p": {
      color: "#999",
    },
  },
  portfolioItem: {
    marginBottom: "25px",
  },
}

export default workStyle
