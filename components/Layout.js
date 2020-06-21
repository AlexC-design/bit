import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>bitprice</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/slate/bootstrap.min.css"
      />
    </Head>

    <Navbar />
    <div className="container" style={{ marginTop: "20px" }}>
      {props.children}
    </div>
  </div>
);

export default Layout;
