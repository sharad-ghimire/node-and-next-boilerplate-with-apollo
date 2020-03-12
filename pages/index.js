import Layout from "../components/Layout";

import { withApollo } from "../lib/apollo";
import Login from "../components/Auth/Login";
import { Test } from "../components/test";

const IndexPage = () => (
  <Layout>
    <Login />
  </Layout>
);

export default withApollo({ ssr: true })(IndexPage);
