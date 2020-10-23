require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Jorge Daniel Sosa",
    description:
      "I'm Jorge Daniel Sosa. Fullstack JS developer with a strong background in systems administration.",
    url: "https://jdsosa.com", // No trailing slash allowed!
    siteUrl: "https://jdsosa.com", // No trailing slash allowed!
    image: "/profile.webp", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/img/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jdsosa.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: process.env.GATSBY_DB_NAME,
        collection: process.env.GATSBY_DB_COLLECTIONS,
        connectionString: process.env.GATSBY_DB_CONNECTION_STRING,
        server: {
          address: process.env.GATSBY_DB_URL,
          port: process.env.GATSBY_DB_PORT,
        },
        auth: {
          user: process.env.GATSBY_DB_USER,
          password: process.env.GATSBY_DB_PASS,
        },
        extraParams: {
          ssl: true,
          replicaSet: process.env.GATSBY_DB_REPLICA_SET,
          authSource: process.env.GATSBY_DB_AUTH_SOURCE,
          retryWrites: true,
        },
      },
    },
  ],
}
