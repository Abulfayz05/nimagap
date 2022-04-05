import styles from "../styles/Feed.module.css";
import Script from "next/script";
function Video() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Video</div>
      </div>

      <div className={styles.card}>
        <>
          <h1> Trend Videos</h1>
        </>
      </div>
    </div>
  );
}

export default Video;
