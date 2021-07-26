import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
//https://webhook.gatsbyjs.com/hooks/data_source/9f79340b-3a62-4b81-b84e-2152ef78f995

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Header />

      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default IndexPage;
