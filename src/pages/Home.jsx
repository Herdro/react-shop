import React from "react";
import Header from "../components/Header";
import CardContainer from "../containers/CardContainer";
import Layout from "../containers/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <CardContainer />
    </Layout>
  );
};

export default Home;
