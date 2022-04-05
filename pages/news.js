import styles from "../styles/Feed.module.css";
import Post from "../component/Post";
function News() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Yangiliklar</div>
      </div>

      <div>
        <Post />
      </div>
    </div>
  );
}

export default News;
