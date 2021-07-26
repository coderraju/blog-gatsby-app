module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blogApp",
    description: "Helo there",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
