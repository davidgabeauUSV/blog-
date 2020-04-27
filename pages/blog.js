import Link from "next/link";
import Layout from '../components/Layout';


export default () => (
  <Layout title="Blog">
    <Link href="/">
      <a> Go to home </a>
    </Link>

    <p> This is my blog </p>

    <img src="/static/glo_logo.jpg" alt="Glo logo" height="200px"
    />
  </Layout>

);
