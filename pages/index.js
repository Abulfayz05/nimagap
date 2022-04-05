import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../component/Sidebar";
import Feed from "../component/Feed";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Nima Gap</title>
        <meta name="description" content="Trend Video Music Mems Sports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Feed />
    </div>
  );
}
