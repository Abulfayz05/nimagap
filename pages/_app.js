import "../styles/globals.css";
import Layout from "../component/Layout";
import { NextSeo } from "next-seo";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextSeo
        title="Nima gap || Trend mavzular "
        titleTemplate="Trend Mavzular "
        description="Barchasi bir joyda ushbu saytda dunyodage eng trendagi mavzular joylashtirb boriladi . Trend Music, Trend Video, Trend Sport, Trend Actor, Trend Mems, T="
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
