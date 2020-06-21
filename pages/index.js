import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1 style={{ color: "white" }}>Welcome to bitprice</h1>
      <p style={{ color: "#5bc0de" }}>Check current bitcoin rate</p>
      <Prices bpi={bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;
