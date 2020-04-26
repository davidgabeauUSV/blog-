import Link from "next/link";

import Layout from '../components/Layout';


export default () => (
  <Layout title="About">
    <Link href="/">
      <a> Go to home </a>
    </Link>

    <p> A project by David Gabeau </p>

    <img src="/static/glo_logo.jpg" alt="Glo logo" height="200px"
    />
  </Layout>

);
