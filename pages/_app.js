import "@/styles/globals.css";
import "../styles/normalize.css";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "@/store/redux-country";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Country API Application</title>
        <meta name="description" content="Country API Application" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Aleksandr Liskov" />
        <meta charset="UTF-8" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
